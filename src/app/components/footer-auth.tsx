export default function FooterAuth() {
  return (
    <div className="login__question mt-8 text-center text-sm text-gray-600">
      If you have any questions, contact us at{" "}
      <a
        className="login__email text-blue-500"
        href="mailto:support@lmctplus.com"
      >
        support@lmctplus.com
      </a>{" "}
      or call at{" "}
      <a className="login__phone text-blue-500" href="tel:+61 1300 683 688">
        +61 1300 683 688
      </a>
    </div>
  );
}
