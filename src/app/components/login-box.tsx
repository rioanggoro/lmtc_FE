import Image from "next/image";

export default function LoginBox() {
  return (
    <div className="login__box login__box--image relative hidden overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,_#fff_0%,_#54bfff_90%)] md:block md:w-1/2">
      <div className="absolute inset-0">
        <span className="line-animation"></span>
        <span className="line-animation"></span>
        <span className="line-animation"></span>
        <span className="line-animation"></span>
        <span className="line-animation"></span>
        <span className="line-animation"></span>
        <span className="line-animation"></span>
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <Image
          className="login__img"
          src="/img/lmctm.png"
          alt="Safe"
          width={400}
          height={400}
          priority
        />
      </div>
    </div>
  );
}
