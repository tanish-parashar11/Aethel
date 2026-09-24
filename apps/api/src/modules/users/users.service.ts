export type User = {
  id: string;
  name: string;
  email: string;
  university: string;
  role: 'student' | 'moderator' | 'admin';
};

export class UsersService {
  private users: User[] = [
    {
      id: 'u_101',
      name: 'Aisha Khanna',
      email: 'aisha@college.edu',
      university: 'NIT Delhi',
      role: 'student',
    },
    {
      id: 'u_102',
      name: 'Riya Malhotra',
      email: 'riya@college.edu',
      university: 'IIT Bombay',
      role: 'moderator',
    },
  ];

  getUsers() {
    return { users: this.users };
  }

  getUserById(id: string) {
    return this.users.find((user) => user.id === id) ?? null;
  }

  createUser(payload: { name: string; email: string; university: string }) {
    const newUser: User = {
      id: `u_${Date.now()}`,
      name: payload.name,
      email: payload.email,
      university: payload.university,
      role: 'student',
    };

    this.users.push(newUser);

    return {
      message: 'User created successfully',
      user: newUser,
    };
  }
}
