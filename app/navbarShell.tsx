"use client";
import { usePathname } from "next/navigation";

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";

import {
    Bars3Icon,
    BellIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
    { name: "Dashboard", href: "/" },
    { name: "Team", href: "/team" },
    { name: "Projects", href: "/projects" },
    { name: "Calendar", href: "/calendar" },
    { name: "Reports", href: "/reports" },
];

const userNavigation = [
    { name: "Your profile", href: "/profile" },
    { name: "Settings", href: "/settings" },
    { name: "Sign out", href: "/signout" },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function NavbarShell({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    return (
        <div className="min-h-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
            {/* NAVBAR */}
            <Disclosure
                as="nav"
                className="bg-gray-900/70 backdrop-blur border-b border-white/10 shadow-sm"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Left side */}
                        <div className="flex items-center">
                            <div className="shrink-0 flex items-center gap-2">
                                <img
                                    alt="Your Company"
                                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                    className="h-8 w-8"
                                />
                                <span className="hidden sm:inline-block text-sm font-semibold text-gray-100 tracking-wide">
                                    AB
                                </span>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-2">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                pathname === item.href
                                                    ? "bg-indigo-600 text-white shadow-sm" // ACTIVE link
                                                    : "text-gray-300 hover:bg-white/5 hover:text-white", // INACTIVE
                                                "rounded-full px-4 py-2 text-sm font-medium transition"
                                            )}
                                        >
                                            {item.name}
                                        </a>

                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right side - desktop */}
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6 gap-4">
                                {/* Notification button */}
                                <button
                                    type="button"
                                    className="relative rounded-full p-1.5 text-gray-400 hover:text-white hover:bg-white/5 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative">
                                    <MenuButton className="relative flex max-w-xs items-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                                        <img
                                            alt={user.name}
                                            src={user.imageUrl}
                                            className="h-8 w-8 rounded-full border border-white/20"
                                        />
                                    </MenuButton>

                                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg bg-gray-900/95 border border-white/10 shadow-lg py-1">
                                        <div className="px-4 py-2 border-b border-white/10">
                                            <p className="text-sm font-medium text-white">
                                                {user.name}
                                            </p>
                                            <p className="text-xs text-gray-400">{user.email}</p>
                                        </div>
                                        {userNavigation.map((item) => (
                                            <MenuItem key={item.name}>
                                                {({ active }) => (
                                                    <a
                                                        href={item.href}
                                                        className={classNames(
                                                            active ? "bg-white/5" : "",
                                                            "block px-4 py-2 text-sm text-gray-300"
                                                        )}
                                                    >
                                                        {item.name}
                                                    </a>
                                                )}
                                            </MenuItem>
                                        ))}
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="-mr-2 flex md:hidden">
                            <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon
                                    aria-hidden="true"
                                    className="block h-6 w-6 group-data-[open]:hidden"
                                />
                                <XMarkIcon
                                    aria-hidden="true"
                                    className="hidden h-6 w-6 group-data-[open]:block"
                                />
                            </DisclosureButton>
                        </div>
                    </div>
                </div>

                {/* Mobile menu panel */}
                <DisclosurePanel className="md:hidden border-t border-white/10 bg-gray-900/95">
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                className={classNames(
                                    pathname === item.href
                                        ? "bg-indigo-600 text-white"
                                        : "text-gray-300 hover:bg-white/5 hover:text-white",
                                    "block rounded-md px-3 py-2 text-base font-medium"
                                )}
                            >
                                {item.name}
                            </DisclosureButton>

                        ))}
                    </div>
                    <div className="border-t border-white/10 pt-4 pb-3">
                        <div className="flex items-center px-5">
                            <div className="shrink-0">
                                <img
                                    alt={user.name}
                                    src={user.imageUrl}
                                    className="h-10 w-10 rounded-full border border-white/20"
                                />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium text-white">
                                    {user.name}
                                </div>
                                <div className="text-sm font-medium text-gray-400">
                                    {user.email}
                                </div>
                            </div>
                            <button
                                type="button"
                                className="relative ml-auto shrink-0 rounded-full p-1.5 text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                            >
                                <span className="sr-only">View notifications</span>
                                <BellIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-3 space-y-1 px-2">
                            {userNavigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </div>
                </DisclosurePanel>
            </Disclosure>

            {/* Main dashboard content (wrapped around children) */}
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>

            {/* FOOTER */}
            <footer className="mt-10 border-t border-white/10 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/80 backdrop-blur-xl shadow-2xl">
                <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">

                    {/* Branding */}
                    <p className="text-gray-400 text-sm tracking-wide hover:text-gray-200 transition">
                        © {new Date().getFullYear()} <span className="text-indigo-400 font-medium">AB</span>.
                        All rights reserved.
                    </p>

                    {/* Links */}
                    <div className="flex items-center gap-8 text-sm font-medium">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-indigo-400 transition duration-200 hover:drop-shadow-[0_0_4px_rgba(99,102,241,0.5)]"
                        >
                            Privacy Policy
                        </a>

                        <div className="h-4 w-px bg-white/10"></div>

                        <a
                            href="#"
                            className="text-gray-400 hover:text-indigo-400 transition duration-200 hover:drop-shadow-[0_0_4px_rgba(99,102,241,0.5)]"
                        >
                            Terms of Service
                        </a>

                        <div className="h-4 w-px bg-white/10"></div>

                        <a
                            href="/contact"
                            className="text-gray-400 hover:text-indigo-400 transition duration-200 hover:drop-shadow-[0_0_4px_rgba(99,102,241,0.5)]"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </footer>

        </div>
    );
}
