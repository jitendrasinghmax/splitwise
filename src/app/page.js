import Link from "next/link";
import Button from "../../component/ui/button/Button";
import Image from "next/image";

export default function Home() {

  return (
    <>
    <div className="landing">
      <section className="landing-container">
        <div className="batch">Split Expence. Simple Life</div>
        <h1>The Smartest Way to Split Expence with friends</h1>
        <p>Track Shared Expence, Split bills effortlessly and settle up quickly.Never worries about how ows how again</p>
        <div className="flex justify-centre gap-4">
          <Link href="/dashboard"><Button variant="outline" borderColor="green">Dashboard</Button></Link>
        <Link href="#How-it-works"><Button variant="outline" borderColor="green">how It Works</Button></Link>
        </div>
        <div className="landing-image-container">
          <Image
              src="/landing-image.png"
              alt=""
              width={600}
              height={600}/>
        </div>
      </section>
    </div>
    </>
  );
}

