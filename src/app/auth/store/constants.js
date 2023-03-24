export const Roles = {
  superadmin: 'superadmin',
  admin: 'admin',
  user: 'user'
}

export const Permissions = {
  ALLOW: 'ALLOW'
}

export const Menus = {
  DASH: 'dashboard',
  APP: 'applications'
}

export const RoleMenus = [
  // default created super admin
  {
    id: Roles.superadmin,
    access: [Menus.DASH],
    permissions: [Permissions.ALLOW]
  },
  // register admin
  {
    id: Roles.admin,
    access: [Menus.DASH],
    permissions: [Permissions.ALLOW]
  },
  // register user
  {
    id: Roles.user,
    access: [Menus.DASH],
    permissions: [Permissions.ALLOW]
  }
]
