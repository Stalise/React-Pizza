export interface IState {
   isAuth: boolean,
   status: 'ready' | 'pending' | 'auth' | 'reg',
}

/*=====================================================*/

export interface IChangeAuthPayload {
   isAuth: boolean,
   status: 'ready' | 'pending' | 'auth' | 'reg',
}

export interface IAuthThunkPayload {
   payload: boolean,
}