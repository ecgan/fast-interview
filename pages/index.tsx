import { PageHeader } from "antd";
import Stores from "@/components/Stores/Stores";

export default function Home() {
  return (
    <div>
      <PageHeader
        title='Fast'
      >
      </PageHeader>
      <Stores />
    </div>
  )
}
