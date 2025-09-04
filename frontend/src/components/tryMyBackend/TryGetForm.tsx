import React from 'react'
import { Button } from '../ui'

interface Props {
    formAction: (payload: FormData) => void;
    placeholder: string;
    isPending: boolean;
    nameButton: string;
    errorMessage: string | null;
}

const TryGetForm = ({ formAction, placeholder, isPending, nameButton, errorMessage }:Props) => {
  return (
    <div className="flex flex-col gap-1">
      <form className="flex flex-row gap-2 items-center bg-gray-900 pl-3 rounded-lg" action={formAction}>
        <input
          type="text"
          name="title"
          placeholder={placeholder}
          disabled={isPending}
          className="flex-1 text-white py-1 outline-none border-none focus:border-b-pink-flour"
        />
        <Button
          variant="solid"
          className="bg-pink-400 px-2! hover:bg-pink-500 transition md:px-g"
          disabled={isPending}
          isLoading={isPending}
          type='submit'
        >
        { nameButton }
        </Button>
      </form>
      <p className="text-xs text-red-700">{errorMessage}</p>
    </div>
  )
}

export default TryGetForm