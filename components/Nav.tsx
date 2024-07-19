"use client";

import Link from "next/link";
import Image from "next/image";

function Nav() {
  let isUserLoggedIn = false;

  const signOut = () => {};

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src={"/assets/images/logo.svg"}
          alt="img"
          width={30}
          height={30}
          className="object-contain"
        ></Image>
        <p className="logo_text">Promptia</p>
      </Link>
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Logout
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/man.png"
                alt="profile"
                width={30}
                height={30}
              ></Image>
            </Link>
          </div>
        ) : (
          <button type="button" onClick={signOut} className="outline_btn">
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Nav;
