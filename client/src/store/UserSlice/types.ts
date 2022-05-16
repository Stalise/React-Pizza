export interface IState {
   autho: boolean,
   status: string
}

/*=====================================================*/

export interface IChangeAuthPayload {
   isAuth: boolean,
   status: 'ready' | 'pending' | 'auth' | 'create',
}