import cx from 'classnames'
import { ChangeEvent } from 'react'
import { IoWarning } from 'react-icons/io5'

interface IProps {
  id: string
  name: string
  className?: string
  label?: string
  error?: string
  placeholder?: string
  value?: string
  type?: 'text' | 'number' | 'password' | 'email'
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const BasicInput = ({
  className, type = 'text', label, id, name, value, onChange, error, placeholder,
}: IProps): JSX.Element => {
  return (
    <div className={className}>
      {label && <label className="block mb-1" htmlFor={id}>{label}</label>}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={cx(
          'border-[1px] py-2 px-3 rounded-lg w-full border-slate-300',
          { 'border-red-500': !!error }
        )}
      />
      {error && (
        <div className="text-red-500 text-sm pt-1">
          <IoWarning className="mr-1 inline-block" />
          {error}
        </div>
      )}
    </div>
  )
}