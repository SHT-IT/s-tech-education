import PageLayout from '../components/PageLayout'
import Card from '../components/Card'
import { FaFileAlt, FaComments, FaBriefcase, FaUserTie } from 'react-icons/fa'

export default function PlacementSupport() {
  return (
    <PageLayout
      title="Placement Support"
      subtitle="Complete job assistance until placement."
    >
      <div className="grid md:grid-cols-2 gap-8">
        <Card icon={FaFileAlt} title="Resume Preparation" gradient="from-emerald-500 to-teal-600">
          Industry-ready resume building support.
        </Card>

        <Card icon={FaComments} title="Mock Interviews" gradient="from-indigo-500 to-purple-600">
          Technical & HR mock interview sessions.
        </Card>

        <Card icon={FaBriefcase} title="Job Referrals" gradient="from-amber-500 to-orange-600">
          Job referrals & interview opportunities.
        </Card>

        <Card icon={FaUserTie} title="Career Guidance" gradient="from-rose-500 to-pink-600">
          One-on-one career mentoring & guidance.
        </Card>
      </div>
    </PageLayout>
  )
}
