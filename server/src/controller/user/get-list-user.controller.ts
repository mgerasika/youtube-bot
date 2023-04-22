import { API_URL } from '../../../constants/api-url.constant';
import { IExpressRequest, IExpressResponse, app } from '../../express-app';
import { IUserDto } from '../../interfaces/user.dto';
import { sqlAsync } from '../sql-async';

interface IRequest extends IExpressRequest {
    query: {
        page?: number;
        limit: number;
    };
}

interface IResponse extends IExpressResponse<IUserDto[], void> {}

app.get(API_URL.api.user.toString(), async (req: IRequest, res: IResponse) => {
    const [data, error] = await getUsersAllAsync();
    if (error) {
        return res.status(400).send('error' + error);
    }
    res.send(data);
});

export const getUsersAllAsync = async () => {
    const tableName = 'user';
    return sqlAsync<IUserDto[]>(async (client) => {
        const { rows } = await client.query(`SELECT * FROM ${tableName}`);
        return rows;
    });
};
