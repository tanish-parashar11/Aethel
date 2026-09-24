import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthUser } from '../../common/types/auth-user';
@Injectable()
export class AuthService {
  verifyToken(token: string): AuthUser { if (!token || token === 'invalid') throw new UnauthorizedException('Invalid token'); const [id='dev-user', email='dev@aneis.local', role='STUDENT'] = token.split(':'); if (!['STUDENT','MODERATOR','ADMIN'].includes(role)) throw new UnauthorizedException('Invalid role'); return { id, email, role: role as AuthUser['role'] }; }
  me(user: AuthUser) { return { user, authMode: process.env.AUTH_MODE || 'development' }; }
}
