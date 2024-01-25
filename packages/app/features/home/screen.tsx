import { A, H1, P, Text, TextLink } from 'app/design/typography'

import ReadSection from 'app/Components/ReadSection'
import { View } from 'moti'
import { Row } from 'app/design/layout'
import ButtonLink from 'app/Components/Ui/ButtonLink'

export function HomeScreen() {
  return (
    <>
      <Row className="flex-1 sm:mx-auto sm:w-2/3">
        <Row className="mx-auto flex flex-col items-center">
          <H1 className="text-center">Welcome to technical task.</H1>

          <P className="text-center font-bold">
            Every Link here is is Block from flowbite
          </P>

          <Row className="mx-auto w-full items-center justify-center  xl:m-10 ">
            <View>
              <ButtonLink
                link="AdvancedTablePage"
                text="Advanced Table Dashboard"
              />
              <ButtonLink
                link="AnotherAdvancedTablePage"
                text="Another Advanced Table Dashboard"
              />
              <ButtonLink
                text="Advanced update event modal"
                link="AdvancedUpdateEventModalPage"
              />
              <ButtonLink
                link="AdvancedUserReadModalPage"
                text="Advanced User Read Modal"
              />
              <ButtonLink
                text="Advanced Read User Modal"
                link="AdvancedReadEventModalPage"
              />
              <ButtonLink
                link="ReadProductModalPage"
                text="Read Product Modal"
              />
              <ButtonLink link="ReadUserModalPage" text="Read User Modal" />

              <ButtonLink link="ReadEventModalPage" text="Read Event Modal" />

              <ButtonLink text="Default modal" link="DefaultModalPage" />

              <ButtonLink link="Test" text="First Block" />
            </View>
          </Row>
        </Row>
      </Row>
    </>
  )
}

/*


*/
