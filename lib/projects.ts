export interface Project {
  slug: string
  title: string
  suburb: string
  type: string
  duration: string
  description: string
  challenge: string
  solution: string
  result: string
  images: string[]
  coverImage: string
  coverImageAlt: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'kitchen-transformation-newlands',
    title: 'Kitchen Transformation — Newlands',
    suburb: 'Newlands',
    type: 'Kitchen Renovation',
    duration: '5 weeks',
    description:
      'Complete kitchen remodel including new layout, cabinetry, tiling, and electrical. The homeowners wanted a modern open-plan kitchen that worked better for their family.',
    challenge:
      'The original kitchen was a closed-off galley layout with outdated plumbing and insufficient electrical points. The load-bearing wall between the kitchen and dining room needed careful assessment before any structural changes could be made.',
    solution:
      'We opened the kitchen up by removing a non-load-bearing partition wall and reconfiguring the plumbing layout entirely. New cabinetry was installed with soft-close hardware, and the electrical was brought up to code with dedicated circuits for appliances. Large-format porcelain tiles were laid throughout.',
    result:
      'The homeowners now have a spacious, light-filled open-plan kitchen that works the way they live. The project was completed on schedule in 5 weeks and came in within the quoted budget.',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop&q=80',
    ],
    coverImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop&q=80',
    coverImageAlt: 'Modern kitchen renovation with white cabinetry and stone countertops',
    featured: true,
  },
  {
    slug: 'double-storey-extension-bellville',
    title: 'Double Storey Extension — Bellville',
    suburb: 'Bellville',
    type: 'Home Extension',
    duration: '10 weeks',
    description:
      'New bedroom and bathroom added above the existing garage. Full plans approval handled. The family needed an additional guest suite without reducing their garden space.',
    challenge:
      'The existing garage structure required structural reinforcement before the upper storey could be added. Municipal plans approval added complexity, and the project had to be coordinated carefully to minimise disruption to the family living in the home throughout the build.',
    solution:
      'We engaged a structural engineer to assess and reinforce the garage slab and walls. Our team handled all drawings, submission, and approval with the local municipality. Once approval was granted, the upper storey was framed, bricked, roofed, and finished — including a full en-suite bathroom with waterproofing.',
    result:
      'A fully self-contained guest suite with its own bathroom, accessed via an external staircase. Plans approval secured. The family now has flexible accommodation for guests or extended family.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80',
    ],
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80',
    coverImageAlt: 'Modern home exterior with double storey extension',
    featured: true,
  },
  {
    slug: 'bathroom-renovation-paarl',
    title: 'Bathroom Renovation — Paarl',
    suburb: 'Paarl',
    type: 'Bathroom Renovation',
    duration: '3 weeks',
    description:
      'Full gut and rebuild. New plumbing, waterproofing, tiling, and fittings. The original bathroom was poorly waterproofed, causing water damage to the adjacent bedroom wall.',
    challenge:
      'The extent of the water damage only became clear once the old tiles were stripped. The membrane behind the shower had failed, and moisture had tracked into the timber framing of the adjacent wall. This required remediation before the new bathroom could be built.',
    solution:
      'We stripped the bathroom to the shell, treated and dried the affected framing, and applied a full tanking membrane system before any new work went in. The new layout was reconfigured slightly to improve functionality, with new plumbing, heated towel rails, and large-format tiles throughout.',
    result:
      'A fully waterproofed, beautifully finished bathroom. The adjacent wall was fully remediated and shows no signs of moisture. The homeowner now has peace of mind along with a bathroom they love.',
    images: [
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&auto=format&fit=crop&q=80',
    ],
    coverImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&auto=format&fit=crop&q=80',
    coverImageAlt: 'Renovated modern bathroom with white tiling and frameless shower',
    featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
