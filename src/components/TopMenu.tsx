export default function TopMenu() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      background: "black",
      padding: "10px"
    }}>

      <a href="/booking" style={{color:"white"}}>Booking</a>

      <img src="/img/logo.png" className="h-16" />

    </div>
  )
}