import { PrismaClient, UserRole } from '@prisma/client';
const prisma = new PrismaClient();
async function main() { const user = await prisma.user.upsert({ where: { email: 'admin@aneis.local' }, update: {}, create: { email: 'admin@aneis.local', name: 'Aneis Admin', role: UserRole.ADMIN } }); const hub = await prisma.hub.upsert({ where: { slug: 'software-engineering' }, update: {}, create: { name: 'Software Engineering', slug: 'software-engineering', category: 'STEM', description: 'Projects and system design.', verifiedRequired: true } }); await prisma.hubMember.upsert({ where: { userId_hubId: { userId: user.id, hubId: hub.id } }, update: { role: 'OWNER' }, create: { userId: user.id, hubId: hub.id, role: 'OWNER' } }); }
main().finally(() => prisma.$disconnect());
