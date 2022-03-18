import classNames from 'classnames'

interface LayoutProps {
  children?: React.ReactNode
  className?: string
}

export function Layout({ children, className = '', ...props }: LayoutProps) {
  const styles = {
    layout: classNames(
      'bg-plains-100 flex flex-col items-center justify-center min-h-screen py-2',
      className
    ),
    container: 'max-w-screen-xl px-6 mx-auto',
  }

  return (
    <div className={styles.layout} {...props}>
      <div className={styles.container}>{children}</div>
    </div>
  )
}
