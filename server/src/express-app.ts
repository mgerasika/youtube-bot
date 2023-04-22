import express, { Request, Response } from 'express';
export const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// app.use(bodyParser.text({ type: '*/*' }));
app.use(bodyParser.json());
app.use(cors());

export type IExpressRequest = {};
export type IExpressResponse<TSuccess, TError > = {
    json: (data: TSuccess | TError) => void;
    send: (data: TSuccess | TError) => void;
} & Response;
