import { API_URL } from '../../../constants/api-url.constant';
import { app, IExpressRequest, IExpressResponse } from '../../express-app';
import { IUserDto } from '../../interfaces/user.dto';
import { sqlAsync } from '../sql-async';
import { getUserByIdAsync } from './get-user.controller';

interface IPutUser extends Omit<IUserDto, 'id'> {}
interface IRequest extends IExpressRequest {
    body: IPutUser;
    params: {
        id: string;
    };
}

interface IResponse extends IExpressResponse<IUserDto, void> {}

app.put(API_URL.api.user.id().toString(), async (req: IRequest, res: IResponse) => {
    const [, error] = await putUserAsync(req.params.id, req.body);
    if (error) {
        return res.status(400).send('error' + error);
    }
    const [data] = await getUserByIdAsync(req.params.id);
    res.send(data);
});

export const putUserAsync = async (id: string, data: IPutUser) => {
    const tableName = 'user';
    return sqlAsync<IUserDto>(async (client) => {
        const { rows } = await client.query(
            `UPDATE ${tableName} SET rate = $1 WHERE id = $2 RETURNING *`,
            [data.rate,  id],
        );
        return rows[0];
    });
};
