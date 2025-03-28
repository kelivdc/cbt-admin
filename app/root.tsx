import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { useNotificationProvider } from "@refinedev/antd";
import { GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider, {
  UnsavedChangesNotifier,
} from "@refinedev/remix-router";

import { ColorModeContextProvider } from "@contexts";
import resetStyle from "@refinedev/antd/dist/reset.css";
import { DataProvider } from "@refinedev/strapi-v4";
import { App as AntdApp, ConfigProvider } from "antd";
import { authProvider, axiosInstance } from "~/authProvider";
import { API_URL } from "~/constants";
import { GroupOutlined, HomeOutlined, PlayCircleOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import idID from 'antd/locale/id_ID';

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "CBT Online",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />        
      </head>
      <body>
        <RefineKbarProvider>
          <ColorModeContextProvider>
            <AntdApp>
              <RefineKbarProvider>
                <Refine
                  routerProvider={routerProvider}
                  authProvider={authProvider}
                  dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}
                  notificationProvider={useNotificationProvider}
                  resources={[
                    {
                      name: "dashboard",
                      list: "/dashboard",
                      meta: {
                        label: "Dashboard",
                        icon: <HomeOutlined />,
                      },
                    },
                    {
                      name: "topiks",
                      list: "/topiks",
                      show: "/topiks/show/:id",
                      create: "/topiks/create",
                      edit: "/topiks/edit/:id",
                      meta: {
                        canDelete: true,
                        label: "Topik",
                        icon: <PlayCircleOutlined />,
                      },
                    },                                 
                    {
                      name: "users",
                      list: "/admins",
                      create: "/admins/create",
                      edit: "/admins/edit/:id",
                      show: "/admins/show/:id",
                      meta: {                                            
                        canDelete: true,
                        label: "Admin",
                        icon: <UserOutlined />,
                      },
                    },
                    {
                      name: "users",
                      identifier: "pesertas",
                      list: "/pesertas",
                      create: "/pesertas/create",
                      edit: "/pesertas/edit/:id",
                      show: "/pesertas/show/:id",
                      meta: {       
                        canDelete: true,
                        label: "Peserta",
                        icon: <UserOutlined />,
                      },
                    },
                    // {
                    //   name: "users",
                    //   list: "/pesertas",
                    //   create: "/pesertas/create",
                    //   edit: "/pesertas/edit/:id",
                    //   show: "/pesertas/show/:id",
                    //   meta: {
                    //     canDelete: true,
                    //     label: "Peserta",
                    //     icon: <UserOutlined />,
                    //   },
                    // },
                    {
                      name: "soals",
                      list: "/soals",
                      create: "/soals/create",
                      edit: "/soals/edit/:id",
                      show: "/soals/show/:id",
                      meta: {
                        canDelete: true,
                        label: "Soal",
                        icon: <UnorderedListOutlined />,
                      },
                    },
                    {
                      name: "user-jawabans",
                      list: "/lembarans",                      
                      show: "/lembarans/show/:id",
                      meta: {
                        canDelete: true,
                        label: "Hasil Jawaban",
                        icon: <UnorderedListOutlined />,
                      },
                    },
                  ]}
                  options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                    useNewQueryKeys: true,
                    projectId: "9MULXu-TbeBAZ-beh7Oe",
                  }}
                >
                  <>
                    <Outlet />
                    <UnsavedChangesNotifier />
                    <RefineKbar />
                  </>                  
                </Refine>
              </RefineKbarProvider>
            </AntdApp>
          </ColorModeContextProvider>
        </RefineKbarProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: resetStyle }];
}
