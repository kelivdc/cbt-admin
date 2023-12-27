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
import { App as AntdApp } from "antd";
import { authProvider, axiosInstance } from "~/authProvider";
import { API_URL } from "~/constants";
import { GroupOutlined, HomeOutlined, PlayCircleOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons";

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
                      create: "/topiks/create",
                      edit: "/topiks/edit/:id",
                      meta: {
                        canDelete: true,
                        label: "Topik",
                        icon: <PlayCircleOutlined />,
                      },
                    },
                    {
                      name: "kelompoks",
                      list: "/kelompoks",                      
                      create: "/kelompoks/create",
                      edit: "/kelompoks/edit/:id",
                      meta: {
                        canDelete: true,
                        label: "Kelompok",
                        icon: <GroupOutlined />,
                      },
                    },
                    // {
                    //   name: "pesertas",
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
                      name: "users",
                      list: "/users",
                      create: "/users/create",
                      edit: "/users/edit/:id",
                      show: "/users/show/:id",
                      meta: {
                        canDelete: true,
                        label: "Peserta",
                        icon: <UserOutlined />,
                      },
                    },
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
