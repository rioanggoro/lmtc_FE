"use client";

import Membership from "../components/view/membership.page";
import MembershipMobile from "../components/view/membership-mobview";

export default function MembershipPage() {
  return (
    <>
      <div className="block md:hidden">
        <MembershipMobile />
      </div>
      <div className="hidden md:block">
        <Membership />
      </div>
    </>
  );
}
