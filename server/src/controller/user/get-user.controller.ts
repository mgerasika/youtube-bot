import { API_URL } from '../../../constants/api-url.constant';
import { app, IExpressRequest, IExpressResponse } from '../../express-app';
import { IUserDto } from '../../interfaces/user.dto';
import { sqlAsync } from '../sql-async';

interface IRequest extends IExpressRequest {
    params: {
        id: string;
    };
}

interface IResponse extends IExpressResponse<IUserDto, void> {}

app.get(API_URL.api.user.id().toString(), async (req: IRequest, res: IResponse) => {
    const [data, error] = await getUserByIdAsync(req.params.id);
    if (error) {
        return res.status(400).send('error' + error);
    }
    res.send(data);
});

export const getUserByIdAsync = async (id: string) => {
    const tableName = 'user';
    return sqlAsync<IUserDto>(async (client) => {
        const { rows } = await client.query(`SELECT * FROM ${tableName} WHERE id = $1`, [id]);
        return rows[0];
    });
};
