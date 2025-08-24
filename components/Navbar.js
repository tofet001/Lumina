import Link from 'next/link';

export default function Navbar() {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  return (
    <nav>
      <div>
        <Link href="/">Home</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/events">Events</Link>
      </div>
      <div>
        {!token ? (
          <>
            <Link href="/register">Register</Link>
            <Link href="/login">Login</Link>
          </>
        ) : (
          <button onClick={() => { localStorage.removeItem('token'); location.reload(); }}>Logout</button>
        )}
      </div>
    </nav>
  );
}