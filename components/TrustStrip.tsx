import { Shield, Clock, MapPin, Award, Home } from 'lucide-react'

const badges = [
  { icon: Shield, label: 'Fully Insured' },
  { icon: Clock, label: '5+ Years Experience' },
  { icon: MapPin, label: 'Western Cape Based' },
  { icon: Award, label: 'NHBRC Registration In Progress' },
  { icon: Home, label: 'Free Site Visits' },
]

export default function TrustStrip() {
  return (
    <section className="bg-white border-y border-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-sm text-stone">
              <Icon className="w-5 h-5 text-sage shrink-0" />
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
