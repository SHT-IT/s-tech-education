import PageLayout from '../components/PageLayout'
import Card from '../components/Card'
import { FaQuestionCircle } from 'react-icons/fa'

export default function FAQs() {
  return (
    <PageLayout
      title="Frequently Asked Questions"
      subtitle="Common questions answered."
    >
      <div className="grid md:grid-cols-2 gap-8">
        <Card icon={FaQuestionCircle} title="Are classes live?" gradient="from-indigo-500 to-purple-600">
          Yes, all sessions are live instructor-led.
        </Card>

        <Card icon={FaQuestionCircle} title="Do you provide recordings?" gradient="from-emerald-500 to-teal-600">
          Yes, lifetime access to recordings is provided.
        </Card>
      </div>
    </PageLayout>
  )
}
