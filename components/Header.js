import Link from "next/link"
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>Index</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </header>
  )
}