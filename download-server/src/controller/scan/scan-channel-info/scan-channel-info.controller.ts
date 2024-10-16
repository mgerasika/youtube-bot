import { IExpressRequest, IExpressResponse, app } from '@server/express-app';
import { API_URL } from '@server/constants/api-url.constant';
import { IScanChannelInfoBody, scanChannelInfoAsync } from './scan-channel-info.service';
import { requestService } from 'swagger-to-typescript2';
import { api } from '@server/api.generated';
import { toQuery } from '@server/utils/to-query.util';
import { allServices } from '@server/controller/all-services';

interface IRequest extends IExpressRequest {
    body: IScanChannelInfoBody;
}

interface IResponse extends IExpressResponse<void, void> {}

app.post(API_URL.api.scan.scanChannelInfo.toString(), async (req: IRequest, res: IResponse) => {
    const [data, error] = await allServices.scan.scanChannelInfoAsync(req.body);
    if (error) {
        return res.status(400).send(error);
    }
    
   
    return res.send(data);
});
