import { API_URL } from '../../../constants/api-url.constant';
import { app, IExpressRequest, IExpressResponse } from '../../express-app';
import { IUserDto } from '../../interfaces/user.dto';
import { sqlAsync } from '../sql-async';
import { getUsersAllAsync } from './get-list-user.controller';

interface IRequest extends IExpressRequest {
    params: {
        id: string;
    };
}

interface IResponse extends IExpressResponse<IUserDto[], void> {}

app.delete(API_URL.api.user.id().toString(), async (req: IRequest, res: IResponse) => {
    const [, error] = await deleteUserAsync(req.params.id);
    if (error) {
        return res.status(400).send('error' + error);
    }
    const [data] = await getUsersAllAsync();
    res.send(data);
});

export const deleteUserAsync = async (id: string) => {
    const tableName = 'user';
    return sqlAsync<IUserDto>(async (client) => {
        const { rows } = await client.query(`DELETE FROM ${tableName} WHERE id = $1 RETURNING *`, [id]);
        return rows[0];
    });
};
