import { InferActionsType, ThunkType } from './store';
import { employeesApi, UserType } from '../api';

export enum ActionType {
  SET_LOADING = 'RS/EMPLOYEES/SET_LOADING',
  SET_EMPLOYEES = 'RS/EMPLOYEES/SET_EMPLOYEES',
  DELETE_EMPLOYEE = 'RS/EMPLOYEES/DELETE_EMPLOYEE',
  ADD_EMPLOYEE = 'RS/EMPLOYEES/ADD_EMPLOYEE',
}

const initialState = {
  users: [] as Array<UserType>,
  loading: false,
};

export const employeesReducer = (
  state = initialState,
  action: EmployeesActionsType,
): EmployeesStateType => {
  switch (action.type) {
    case ActionType.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case ActionType.SET_EMPLOYEES: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case ActionType.DELETE_EMPLOYEE: {
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload),
      };
    }

    case ActionType.ADD_EMPLOYEE: {
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: Number(action.payload.id),
            email: '',
            first_name: action.payload.name,
            last_name: '',
            avatar: '',
          },
        ],
      };
    }

    default:
      return state;
  }
};

/** Actions */
export const actions = {
  setLoading: (status: boolean) =>
    ({ type: ActionType.SET_LOADING, payload: status } as const),
  setEmployees: (users: Array<UserType>) =>
    ({ type: ActionType.SET_EMPLOYEES, payload: users } as const),
  deleteEmployee: (id: number) =>
    ({ type: ActionType.DELETE_EMPLOYEE, payload: id } as const),
  addEmployee: (id: string, name: string) =>
    ({ type: ActionType.ADD_EMPLOYEE, payload: { id, name } } as const),
};

/** Thunks */
export const fetchEmployeesAsync = (): ThunkType<
  EmployeesActionsType
> => async (dispatch) => {
  dispatch(actions.setLoading(true));

  try {
    const {
      status,
      data: { data },
    } = await employeesApi.getEmployees();

    if (status === 200) {
      dispatch(actions.setEmployees(data));
    }
  } catch (error) {
    console.log('Error: ', { ...error });
  } finally {
    dispatch(actions.setLoading(false));
  }
};

export const deleteEmployeeAsync = (
  id: number,
): ThunkType<EmployeesActionsType> => async (dispatch) => {
  dispatch(actions.setLoading(true));

  try {
    const { status } = await employeesApi.deleteEmployee(id);

    if (status === 204) {
      dispatch(actions.deleteEmployee(id));
    }
  } catch (error) {
    console.log('Error: ', { ...error });
  } finally {
    dispatch(actions.setLoading(false));
  }
};

export const addEmployeeAsync = (
  name: string,
): ThunkType<EmployeesActionsType> => async (dispatch) => {
  dispatch(actions.setLoading(true));

  try {
    const {
      status,
      data: { id, name: responseName },
    } = await employeesApi.addEmployee(name);

    if (status === 201) {
      dispatch(actions.addEmployee(id, responseName));
    }
  } catch (error) {
    console.log('Error: ', { ...error });
  } finally {
    dispatch(actions.setLoading(false));
  }
};

/** Types */
export type EmployeesStateType = typeof initialState;

export type EmployeesActionsType = InferActionsType<typeof actions>;
