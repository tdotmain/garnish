import classNames from 'classnames'

interface LayoutProps {
  children?: React.ReactNode
  className?: string
}

export function Layout({ children, className = '', ...props }: LayoutProps) {
  const styles = {
    layout: classNames(
      'flex flex-col items-center justify-center min-h-screen py-2',
      className
    ),
    container: 'container px-6 mx-auto',
  }

  return (
    <div className={styles.layout} {...props}>
      <div className={styles.container}>{children}</div>
    </div>
  )
}
