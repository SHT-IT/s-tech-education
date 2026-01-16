import PageLayout from '../components/PageLayout'
import Card from '../components/Card'
import { FaTrophy } from 'react-icons/fa'

export default function SuccessStories() {
  return (
    <PageLayout
      title="Success Stories"
      subtitle="Our students placed in top IT companies."
    >
      <div className="grid md:grid-cols-2 gap-8">
        <Card icon={FaTrophy} title="DevOps Engineer" gradient="from-indigo-500 to-purple-600">
          Fresher to DevOps Engineer success story.
        </Card>

        <Card icon={FaTrophy} title="AWS Cloud Engineer" gradient="from-orange-500 to-yellow-500">
          Successfully placed in AWS Cloud role.
        </Card>
      </div>
    </PageLayout>
  )
}
