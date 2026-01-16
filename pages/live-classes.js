import PageLayout from '../components/PageLayout'
import {
  FaChalkboardTeacher,
  FaUsers,
  FaVideo,
  FaCalendarAlt,
} from 'react-icons/fa'

export default function LiveClasses() {
  return (
    <PageLayout
      title="Live Instructor-Led Classes"
      subtitle="Interactive live sessions with industry experts and real-time doubt solving."
    >
      <div className="grid md:grid-cols-2 gap-8">
        <Card
          icon={FaChalkboardTeacher}
          title="Live Training"
          gradient="from-indigo-500 to-purple-600"
        >
          Real-time classes with experienced DevOps & Cloud trainers.
        </Card>

        <Card
          icon={FaUsers}
          title="Interactive Learning"
          gradient="from-emerald-500 to-teal-600"
        >
          Ask questions, solve doubts & practice during live sessions.
        </Card>

        <Card
          icon={FaVideo}
          title="Recorded Access"
          gradient="from-rose-500 to-pink-600"
        >
          Lifetime access to session recordings.
        </Card>

        <Card
          icon={FaCalendarAlt}
          title="Flexible Batches"
          gradient="from-amber-500 to-orange-600"
        >
          Weekday & weekend batches available.
        </Card>
      </div>
    </PageLayout>
  )
}

function Card({ icon: Icon, title, gradient, children }) {
  return (
    <div
      className="group rounded-3xl bg-white p-6 shadow
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-xl"
    >
      {/* ICON */}
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center
        rounded-xl bg-gradient-to-br ${gradient}
        text-white shadow-lg
        transition-transform duration-300
        group-hover:scale-110`}
      >
        <Icon size={22} />
      </div>

      <h3 className="font-semibold text-gray-950">
        {title}
      </h3>

      <p className="mt-2 text-gray-600 text-sm">
        {children}
      </p>
    </div>
  )
}
