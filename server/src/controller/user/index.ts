import { getUsersAllAsync } from './get-list-user.controller';
import { getUserByIdAsync } from './get-user.controller';
import { postUserAsync } from './post-user.controller';
import { putUserAsync } from './put-user.controller';
import { deleteUserAsync } from './delete-user.controller';

export const user = {
    getUserByIdAsync,
    getUsersAllAsync,
    postUserAsync,
    putUserAsync,
    deleteUserAsync,
};
