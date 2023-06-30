'use client'

import { BasicInput } from '@/components/input/base'
import { PrimaryButton } from '@/components/button/primary'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormData = {
  from: string
  to: string
}


export default function NewShipmentFormPage(): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('submit', data)
  }

  return (
    <div className="responsive flex justify-center items-center h-[calc(100vh_-_56px)]">
      <form className="paper p-6 w-2/3">
        <BasicInput
          id="from"
          label="From"
          className="pb-4"
          {...register('from', {
            required: 'Обязательное поле',
          })}
          error={errors.from?.message}
        />
        <BasicInput
          id="to"
          label="To"
          className="pb-4"
          {...register('to', {
            required: 'Обязательное поле',
          })}
          error={errors.to?.message}
        />

        <PrimaryButton
          className="mt-4 w-full"
          onClick={handleSubmit(onSubmit)}
        >
          Создать заявку
        </PrimaryButton>
      </form>
    </div>
  )
}