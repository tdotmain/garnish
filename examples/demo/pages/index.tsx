import type { GetStaticProps, NextPage } from 'next'
import {
  Button,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
  MoonIcon,
  SunIcon,
  useClipboard,
  GarnishLogoIcon,
  Accordian,
  useGarnish,
  Switch,
} from '@garnish/ui'
import { Layout } from '../components/Layout'

import tailwind from '../tailwind.config'
import { useMemo } from 'react'
import { ColorRunway } from '../components/ColorRunway'

const Home: NextPage = ({ tailwindColors }) => {
  const garnish = useGarnish()
  console.log(garnish)
  const { value, copied, onCopy } = useClipboard('npm i --save @garnish/ui')

  const colors = useMemo(() => {
    const { transparent, current, inherit, white, black, ...rest } =
      tailwindColors
    const { lightBlue, warmGray, trueGray, coolGray, blueGray, ...remaining } =
      rest

    return Object.fromEntries(Object.entries(remaining).sort())
  }, [tailwind])

  return (
    <Layout className="grid py-24">
      <h1 className="md:text-4xl mb-4 text-2xl text-center">
        <GarnishLogoIcon
          className="md:w-12 inline w-6 mr-4"
          style={{ transform: 'rotateY(180deg)' }}
        />
        Welcome to Garnish UI
        <GarnishLogoIcon className="md:w-12 inline w-6 ml-4" />
      </h1>
      <p className="text-center">
        To get started, simply install @garnish/ui with yarn or npm
      </p>
      <div className="flex items-center">
        <input
          readOnly
          className="w-60 p-2 mx-auto mt-4 text-sm text-center bg-white border rounded cursor-pointer"
          onClick={onCopy}
          value={`${value}`}
        />
      </div>

      {/* {copied ? 'Copied' : 'Copy'} */}
      <div className="w-full space-y-12">
        <div className="">
          <p className="mb-2 text-2xl">Colors</p>
          <Accordian label="Color Table">
            <div className="grid gap-4">
              <ColorRunway label="Plains" color={colors['plains']} />
              <ColorRunway label="Garnish" color={colors['atlantis']} />
              {/* {Object.keys(colors).map((color) => (
              <ColorRunway color={colors[color]} />
            ))} */}
            </div>
          </Accordian>
        </div>
        <div className="">
          <p className="mb-2 text-2xl">Switch</p>
          <Accordian label="Color Table" openOnLoad>
            <div>
              <span className="mr-2">{garnish.theme.mode}</span>
              <Switch
                name="theme.mode"
                checked={garnish.theme.mode === 'dark'}
                onChange={garnish.theme.toggleTheme}
              />
            </div>
          </Accordian>
        </div>
        <div>
          <p className="mb-2 text-2xl">Buttons!</p>
          <div
            className="w-full p-2 my-2 space-y-2 border rounded-sm"
            id="buttons"
          >
            <div className="flex space-x-2">
              <Button appearance="warning" iconAfter={<SunIcon />}></Button>
              <Button>
                <MoonIcon />
              </Button>
              <Button appearance="info">
                Info
                <ChevronUpIcon />
              </Button>
              <Button appearance="warning">
                Warning
                <ChevronLeftIcon />
              </Button>
              <Button appearance="danger">
                Danger
                <ChevronDownIcon />
              </Button>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-2 text-2xl">Accordians</p>
          <div className="w-full p-2 my-2 space-y-2 border rounded-sm">
            <Accordian label="Hello!">
              <Accordian label="Boo!">Hi again!!</Accordian>
            </Accordian>
            <Accordian label="Rounded" rounded>
              Rounded
            </Accordian>
          </div>
        </div>
        <div className="text-center">
          <p className="">Todo</p>
          <ul>
            <li>Theming!</li>
            <li>Icons!</li>
            <li>Layout</li>
            <li>dark & light modes</li>
            <li>RTL or LTR modes</li>
            <li></li>
            <li>Select default color palette</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      tailwindColors: tailwind.theme.extend.colors,
    },
  }
}

export default Home
