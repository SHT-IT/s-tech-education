import PageLayout from '../components/PageLayout'
import Card from '../components/Card'
import { FaPenNib } from 'react-icons/fa'

export default function Blog() {
  return (
    <PageLayout
      title="Blog & Articles"
      subtitle="DevOps, Cloud & career insights."
    >
      <div className="grid md:grid-cols-2 gap-8">
        <Card icon={FaPenNib} title="What is DevOps?" gradient="from-indigo-500 to-purple-600">
          Beginner-friendly DevOps introduction.
        </Card>

        <Card icon={FaPenNib} title="AWS Career Roadmap" gradient="from-orange-500 to-yellow-500">
          Step-by-step AWS career guidance.
        </Card>
      </div>
    </PageLayout>
  )
}
