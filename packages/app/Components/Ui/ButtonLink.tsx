import React from 'react'
import { Text } from 'moti'
import { MotiLink } from 'solito/moti'
import { Link, TextLink } from 'solito/link'
import { P } from 'app/design/typography'

interface Props {
  link: string
  text: string
}

const ButtonLink = ({ link = '/', text = 'hello world' }: Props) => {
  return (
    <TextLink textProps={{ style: { color: '#3b3434' } }} href={`/${link}`}>
      {text}
    </TextLink>
  )
}

export default ButtonLink
