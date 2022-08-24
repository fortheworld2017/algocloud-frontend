import axios from 'axios';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
import authAxios from 'src/modules/shared/axios/authAxios';
import AuthCurrentTenant from 'src/modules/auth/authCurrentTenant';

dayjs.extend(utc);

export default class AlgorandService {
  static async getAlgorandOverview(
    favoriteFilter,
    assetFilter,
    poolFilter
  ) {
    const params = {
      favoriteFilter,
      assetFilter,
      poolFilter,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/algorand/overview`,
      {
        params,
      },
    );

    return response.data;
  }

  static async getAlgorandGlobal() {
    const to = Math.floor(Date.now() / 1000);
    const from = to - 31536000;
    const algoPriceUrl = `https://price.algoexplorerapi.io/price/algo-usd/history?since=${from}&until=${to}&interval=1D`;
    const { data: { history } } = await axios.get(algoPriceUrl);

    const marketCapUrl = `https://indexer.algoexplorerapi.io/stats/v2/economics?interval=1W`;
    const { data: { data } } = await axios.get(marketCapUrl);

    return {
      'algoPriceData': history,
      'marketCapData': data,
    };
  }

  static async putAlgorandFavorite(assetId) {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.put(
      `/tenant/${tenantId}/algorand/favorite/${assetId}`,
    );

    return response.data;
  }

  static async putAlgorandShowcase(assetId) {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.put(
      `/tenant/${tenantId}/algorand/showcase/${assetId}`,
    );

    return response.data;
  }

  static async getAlgorandFavorites(orderBy, limit, offset) {
    const params = {
      orderBy,
      limit,
      offset,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/algorand/favorites`,
      {
        params,
      }
    );

    return response.data;
  }

  static async getAlgorandAssets(orderBy, limit, offset) {
    const params = {
      orderBy,
      limit,
      offset,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/algorand/assets`,
      {
        params,
      },
    );

    return response.data;
  }

  static async getAlgorandPools(orderBy, limit, offset) {
    const params = {
      orderBy,
      limit,
      offset,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/algorand/pools`,
      {
        params,
      }
    );

    return response.data;
  }

  static async getAlgorandAsset(assetId, orderBy, limit, offset) {
    const params = {
      orderBy,
      limit,
      offset,
    };

    const tenantId = AuthCurrentTenant.get();

    try {
      const response = await authAxios.get(
        `/tenant/${tenantId}/algorand/asset/${assetId}`,
        {
          params,
        }
      );
      return response.data;
    } catch (err) {
      return { error: true }
    }
  }

  static async getAlgorandPool(address) {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/algorand/pool/${address}`,
    );

    return response.data;
  }

  static async getLastUpdatedTime() {
    const response = await authAxios.get(
      `/last-updated-time`,
    );

    return response.data;
  }
}
