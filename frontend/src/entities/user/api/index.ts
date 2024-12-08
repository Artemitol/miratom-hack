import baseApi from '@shared/api/baseApi';

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<{ id: string; name: string }, string>({
            query: (userId) => `users/${userId}`, 
        }),
        updateUser: builder.mutation<{ success: boolean }, { id: string; name: string }>({
            query: (body) => ({
                url: `users/${body.id}`,
                method: 'PUT',
                body,
            }),
        }),
    }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi; 