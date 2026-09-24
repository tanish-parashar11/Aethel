export type Hub = {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  members: number;
  verifiedRequired: boolean;
};

export class HubsService {
  private hubs: Hub[] = [
    {
      id: 'hub_1',
      name: 'Mathematics',
      slug: 'mathematics',
      description: 'Advanced problem solving, olympiad prep, and proofs.',
      category: 'STEM',
      members: 1234,
      verifiedRequired: true,
    },
    {
      id: 'hub_2',
      name: 'Software Engineering',
      slug: 'software-engineering',
      description: 'Projects, internships, and system design discussions.',
      category: 'STEM',
      members: 2456,
      verifiedRequired: true,
    },
    {
      id: 'hub_3',
      name: 'Public Speaking',
      slug: 'public-speaking',
      description: 'Debate, communication, storytelling, and speaking practice.',
      category: 'Communication',
      members: 980,
      verifiedRequired: false,
    },
  ];

  getHubs() {
    return { hubs: this.hubs };
  }

  getHubBySlug(slug: string) {
    return this.hubs.find((hub) => hub.slug === slug) ?? null;
  }
}
