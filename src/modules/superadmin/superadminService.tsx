import authAxios from 'src/modules/shared/axios/authAxios';

export default class SuperadminService {

  static async fetchUsers(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await authAxios.get(`/superadmin/user`,
      {
        params,
      },
    );

    return response.data;
  }

  static async updateUser(id) {
    const response = await authAxios.put(
      `/superadmin/user/${id}/toggle-status`,
      {},
    );

    return response.data;
  }

  static async fetchTenants(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await authAxios.get(`/superadmin/tenant`, {
      params,
    });

    return response.data;
  }

  static async destroyTenants(ids) {
    const params = {
      ids,
    };

    const response = await authAxios.delete(`/superadmin/tenant`, {
      params,
    });

    return response.data;
  }

  static async createTenant(data) {
    const body = {
      data,
    };

    const response = await authAxios.post(`/superadmin/tenant`, body);

    return response.data;
  }

  static async fetchAnalytics() {
    const response = await authAxios.get(`/superadmin/analytics`, {});

    return response.data;
  }

  static async cancelSubscription(id) {
    const body = {
      tenantId: id,
    };

    const response = await authAxios.put(`/superadmin/cancel-subscription`, body);

    return response.data;
  }

  static async getSettings() {
    const response = await authAxios.get(`/superadmin/settings`, {});
    return response.data;
  }

  static async saveSettings(settings) {
    const body = {
      settings,
    };

    const response = await authAxios.put(
      `/superadmin/settings`,
      body,
    );
    return response.data;
  }
}
