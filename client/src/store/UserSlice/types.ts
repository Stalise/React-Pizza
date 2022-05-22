export interface IState {
   isAuth: boolean,
   status: string
}

/*=====================================================*/

export interface IChangeAuthPayload {
   isAuth: boolean,
   status: 'ready' | 'pending' | 'auth' | 'create',
}