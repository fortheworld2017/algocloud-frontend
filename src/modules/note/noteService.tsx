import authAxios from 'src/modules/shared/axios/authAxios';
import AuthCurrentTenant from 'src/modules/auth/authCurrentTenant';

export default class PlanService {

  static async createNote(data) {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.post(
      `/tenant/${tenantId}/note`, data
    );

    return response.data;
  }

  static async editNote(data) {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.put(
      `/tenant/${tenantId}/note/edit`, data
    );

    return response.data;
  }

  static async getNotes(assetId) {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/note/asset/${assetId}`
    );

    return response.data;
  }

  static async deleteNote(id) {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.delete(
      `/tenant/${tenantId}/note/${id}`,
    );

    return response.data;
  }

  static async createPoolNote(data) {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.post(
      `/tenant/${tenantId}/poolnote`, data
    );

    return response.data;
  }

  static async editPoolNote(data) {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.put(
      `/tenant/${tenantId}/poolnote/edit`, data
    );

    return response.data;
  }

  static async getPoolNotes(poolId) {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/poolnote/pool/${poolId}`
    );

    return response.data;
  }

  static async deletePoolNote(id) {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.delete(
      `/tenant/${tenantId}/poolnote/${id}`,
    );

    return response.data;
  }

}
