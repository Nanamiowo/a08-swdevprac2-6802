import Banner from "@/components/Banner"
import CardPanel from "@/components/CardPanel"

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-10">
      <div className="bg-red-500 text-green-500 p-5 text-center text-3xl">
        1. Deploy ขึ้นบน Vercel จริง ดึงข้อมูลมาแสดงได้
        <br/>
        เชิญชมเลยครับบบบ
      </div>
      

      <Banner/>

      <h1 className="text-3xl font-bold text-center mb-10 text-orange-500">
        TCAS 69!!!
      </h1>

      <CardPanel/>

    </main>
  )
}