import * as employees from './employeesReducer';

describe('employees reducer', () => {
  let state: employees.EmployeesStateType;

  beforeEach(() => {
    state = {
      users: [
        {
          id: 7,
          email: 'michael.lawson@reqres.in',
          first_name: 'Michael',
          last_name: 'Lawson',
          avatar: 'https://reqres.in/img/faces/7-image.jpg',
        },
        {
          id: 8,
          email: 'lindsay.ferguson@reqres.in',
          first_name: 'Lindsay',
          last_name: 'Ferguson',
          avatar: 'https://reqres.in/img/faces/8-image.jpg',
        },
      ],
      loading: false,
    };
  });

  it('should handle setLoading', () => {
    const action = employees.actions.setLoading(true);

    const newState = employees.employeesReducer(state, action);

    expect(newState.loading).toBeTruthy();
  });

  it('should handle setEmployees', () => {
    const users = [
      {
        id: 9,
        email: 'tobias.funke@reqres.in',
        first_name: 'Tobias',
        last_name: 'Funke',
        avatar: 'https://reqres.in/img/faces/9-image.jpg',
      },
      {
        id: 10,
        email: 'byron.fields@reqres.in',
        first_name: 'Byron',
        last_name: 'Fields',
        avatar: 'https://reqres.in/img/faces/10-image.jpg',
      },
    ];

    const action = employees.actions.setEmployees(users);

    const newState = employees.employeesReducer(state, action);

    expect(newState.users).toEqual(users);
  });

  it('should handle deleteEmployee', () => {
    const action = employees.actions.deleteEmployee(7);

    const newState = employees.employeesReducer(state, action);

    expect(newState.users).toHaveLength(1);
    expect(newState.users[0].id).toBe(8);
  });

  it('should handle addEmployee', () => {
    const action = employees.actions.addEmployee('43', 'Andy');

    const newState = employees.employeesReducer(state, action);

    expect(newState.users).toHaveLength(3);
    expect(newState.users[newState.users.length - 1].id).toBe(43);
  });
});
