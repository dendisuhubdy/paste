import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Heading, Paragraph} from '@twilio-paste/typography';
import {Breadcrumb, BreadcrumbItem} from '../breadcrumb';
import {SidebarCategoryRoutes} from '../../constants';
import {getHumanizedNameFromPackageName} from '../../utils/RouteUtils';
import {UL, LI} from '../Typography';

interface NotBuiltProps {
  type?: 'component' | 'primitive' | 'utility';
  name: string;
}

const NotBuilt: React.FC<NotBuiltProps> = ({type, name}) => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to={type === 'utility' ? SidebarCategoryRoutes.UTILITIES : SidebarCategoryRoutes.COMPONENTS}>
          {type === 'utility' ? 'Utilities' : 'Components'}
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading as="h1" variant="heading10">
        {getHumanizedNameFromPackageName(name)}
      </Heading>
      <Box>
        <Paragraph>
          This {type} is on our roadmap, but we haven&apos;t gotten to it yet. This could be for a number of reasons,
          including:
        </Paragraph>
        <UL>
          <LI>This component depends on lower-level components that we haven&apos;t finished building yet.</LI>
          <LI>Other things are currently prioritized higher.</LI>
          <LI>You&apos;re the first team requesting this (even though we want to do it).</LI>
        </UL>
        <Paragraph>
          Feel free to <Anchor href="https://github.com/twilio-labs/paste/issues">file a feature request</Anchor> with
          details on how you want to use this {type} and we&apos;ll respond to you directly.
        </Paragraph>
      </Box>
    </>
  );
};

export {NotBuilt};
