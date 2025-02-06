import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import { green, red } from '@mui/material/colors';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'Dashboard',
    title: 'Welcome To LearInsta',
    icon: <DashboardIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'Java',
    title: 'Java',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'basics',
        title: 'basics',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java-String',
        title: 'Java String',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java-Multhreading',
        title: 'Java Multhreading',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java-Exception',
        title: 'Java Exception',
        icon: <DescriptionIcon />,
      },
      {
        segment: "Java-OOP's",
        title: "Java OOP's",
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java-Collections',
        title: 'Java Collections',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java8',
        title: 'Java8',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'SpringBoot',
    title: 'SpringBoot',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'basics',
        title: 'basics',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java-String',
        title: 'Java String',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java-Multhreading',
        title: 'Java Multhreading',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java-Exception',
        title: 'Java Exception',
        icon: <DescriptionIcon />,
      },
      {
        segment: "Java-OOP's",
        title: "Java OOP's",
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java-Collections',
        title: 'Java Collections',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java8',
        title: 'Java8',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'Microservices',
    title: 'Microservices',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'basics',
        title: 'basics',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java String',
        title: 'Java String',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java Multhreading',
        title: 'Java Multhreading',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java-Exception',
        title: 'Java Exception',
        icon: <DescriptionIcon />,
      },
      {
        segment: "Java-OOP's",
        title: "Java OOP's",
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java-Collections',
        title: 'Java Collections',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java8',
        title: 'Java8',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'MySQL',
    title: 'MySQL',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'basics',
        title: 'basics',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java String',
        title: 'Java String',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java Multhreading',
        title: 'Java Multhreading',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java-Exception',
        title: 'Java Exception',
        icon: <DescriptionIcon />,
      },
      {
        segment: "Java-OOP's",
        title: "Java OOP's",
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java-Collections',
        title: 'Java Collections',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java8',
        title: 'Java8',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'Hibernate',
    title: 'Hibernate',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'basics',
        title: 'basics',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java String',
        title: 'Java String',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java Multhreading',
        title: 'Java Multhreading',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java-Exception',
        title: 'Java Exception',
        icon: <DescriptionIcon />,
      },
      {
        segment: "Java-OOP's",
        title: "Java OOP's",
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java-Collections',
        title: 'Java Collections',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Java8',
        title: 'Java8',
        icon: <DescriptionIcon />,
      },
    ],
  },

];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: false},
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function QuestionAnswerDashboard(props) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      
    >
      <DashboardLayout className="bg-white">
        <PageContainer className='text-white bg-white'>
            {}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
