import React from 'react'
import {redirect} from 'next/navigation'

type Props = {}

function page({}: Props) {
  redirect("/");
}

export default page