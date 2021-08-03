import React, {FC, useState, useRef, useCallback } from 'react';
import { makeStyles, withStyles, Theme, StyleRules } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
  RowDetailState,
  DataTypeProvider,
  PagingState,
  IntegratedPaging,
  FilteringState,
  IntegratedFiltering,
  SearchState,
  SortingState,
  IntegratedSorting,
  IntegratedSelection,
  SelectionState,
} from '@devexpress/dx-react-grid';
import {
  scaleBand,
} from '@devexpress/dx-chart-core';
import {
  ArgumentScale,
  Stack,
  ValueScale,
  EventTracker
} from '@devexpress/dx-react-chart';
import {
    Chart,
    BarSeries,
    LineSeries,
    ArgumentAxis,
    ValueAxis,
    Legend,
    Title,
    Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import {
  Grid, Table, TableBandHeader, TableHeaderRow,
  TableRowDetail,
  PagingPanel,
  TableFilterRow,
  Toolbar,
  SearchPanel,
  TableColumnResizing,
  TableSelection,
  ExportPanel,
} from '@devexpress/dx-react-grid-material-ui';
import { GridExporter } from '@devexpress/dx-react-grid-export';
import { saveAs } from 'file-saver';
import { Button } from '@material-ui/core';
import DxTasksList from './DxTasksList';
import KanbanDashboard from './Kanban/KanbanDashboard';
//import ClientDetailTabPanel from './ClientDetailTabPanel';


interface IClients {
    _id: string;
    inn: string;
    name: string;
    manager: string;
    status: string;
    role: string;
    region: any[];
    competitors: string;
    tags: any[];
    contacts?: any[];
    company?: object;
    condition?: object;
    last_updated?: string;
}
const clients: IClients[] = [
    {
        "_id": "56dfr6gr56rcvb4g7b5",
        "inn": "2451000818",
        "name": "Красцветмет",
        "manager": "608af5e931f85fb848ae1079",
        "status": "new",
        "role": "lid",
        "region": ["Красноярский край","Красноярск"],
        "competitors": "",
        "tags": ["#хорошийклиент", "#производство", "#драгметаллы"],
        "contacts": [
            {
                "_id":  "6f5eq0cd26as87qbz6r",
                "name": "Алексеева Ольга Геннадьевна",
                "position": "Заместитель",
                "phones": ["+73915689789", "+79028347891"],
                "email": "alog@krascvetmet.ru",
                "comment": "Юридические вопросы"
            },
            {
                "_id":  "3d6qv12ft54yhgc5sl7",
                "name": "Черепанов Егор Викторович",
                "position": "Руководитель",
                "phones": ["+73916978352"],
                "email": "chev@krascvetmet.ru",
                "comment": "Закупки"
            }
        ],
        "company": {
            "suggestions": [
                {
                    "value": "ОАО \"КРАСЦВЕТМЕТ\"",
                    "unrestricted_value": "ОАО \"КРАСЦВЕТМЕТ\"",
                    "data": {
                        "kpp": "246201001",
                        "capital": null,
                        "management": {
                            "name": "Дягилев Михаил Владимирович",
                            "post": "ГЕНЕРАЛЬНЫЙ ДИРЕКТОР",
                            "disqualified": null
                        },
                        "founders": null,
                        "managers": null,
                        "predecessors": null,
                        "successors": null,
                        "branch_type": "MAIN",
                        "branch_count": 2,
                        "source": null,
                        "qc": null,
                        "hid": "757337c798dc4c2353a1147431c33d0575b39d1e8d8d7ab26804f950266e5460",
                        "type": "LEGAL",
                        "state": {
                            "status": "ACTIVE",
                            "code": null,
                            "actuality_date": 1616544000000,
                            "registration_date": 788486400000,
                            "liquidation_date": null
                        },
                        "opf": {
                            "type": "2014",
                            "code": "12247",
                            "full": "Публичное акционерное общество",
                            "short": "ПАО"
                        },
                        "name": {
                            "full_with_opf": "ОТКРЫТОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО \"КРАСНОЯРСКИЙ ЗАВОД ЦВЕТНЫХ МЕТАЛЛОВ ИМЕНИ В.Н. ГУЛИДОВА\"",
                            "short_with_opf": "ОАО \"КРАСЦВЕТМЕТ\"",
                            "latin": null,
                            "full": "КРАСНОЯРСКИЙ ЗАВОД ЦВЕТНЫХ МЕТАЛЛОВ ИМЕНИ В.Н. ГУЛИДОВА",
                            "short": "КРАСЦВЕТМЕТ"
                        },
                        "inn": "2451000818",
                        "ogrn": "1022402056324",
                        "okpo": "00196533",
                        "okato": "04401368000",
                        "oktmo": "04701000001",
                        "okogu": "4210001",
                        "okfs": "13",
                        "okved": "24.41",
                        "okveds": null,
                        "authorities": null,
                        "documents": null,
                        "licenses": null,
                        "finance": {
                            "tax_system": null,
                            "income": null,
                            "expense": null,
                            "debt": null,
                            "penalty": null,
                            "year": 2019
                        },
                        "address": {
                            "value": "г Красноярск, Транспортный проезд, д 1",
                            "unrestricted_value": "660123, Красноярский край, г Красноярск, Ленинский р-н, Транспортный проезд, д 1",
                            "data": {
                                "postal_code": "660123",
                                "country": "Россия",
                                "country_iso_code": "RU",
                                "federal_district": "Сибирский",
                                "region_fias_id": "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
                                "region_kladr_id": "2400000000000",
                                "region_iso_code": "RU-KYA",
                                "region_with_type": "Красноярский край",
                                "region_type": "край",
                                "region_type_full": "край",
                                "region": "Красноярский",
                                "area_fias_id": null,
                                "area_kladr_id": null,
                                "area_with_type": null,
                                "area_type": null,
                                "area_type_full": null,
                                "area": null,
                                "city_fias_id": "9b968c73-f4d4-4012-8da8-3dacd4d4c1bd",
                                "city_kladr_id": "2400000100000",
                                "city_with_type": "г Красноярск",
                                "city_type": "г",
                                "city_type_full": "город",
                                "city": "Красноярск",
                                "city_area": null,
                                "city_district_fias_id": null,
                                "city_district_kladr_id": null,
                                "city_district_with_type": "Ленинский р-н",
                                "city_district_type": "р-н",
                                "city_district_type_full": "район",
                                "city_district": "Ленинский",
                                "settlement_fias_id": null,
                                "settlement_kladr_id": null,
                                "settlement_with_type": null,
                                "settlement_type": null,
                                "settlement_type_full": null,
                                "settlement": null,
                                "street_fias_id": "d16f212c-50b5-4d7e-b751-8e826644d58b",
                                "street_kladr_id": "24000001000101500",
                                "street_with_type": "Транспортный проезд",
                                "street_type": "проезд",
                                "street_type_full": "проезд",
                                "street": "Транспортный",
                                "house_fias_id": "eccb1242-e9ab-41e1-a8e1-d05e078beda3",
                                "house_kladr_id": "2400000100010150001",
                                "house_type": "д",
                                "house_type_full": "дом",
                                "house": "1",
                                "block_type": null,
                                "block_type_full": null,
                                "block": null,
                                "entrance": null,
                                "floor": null,
                                "flat_fias_id": null,
                                "flat_type": null,
                                "flat_type_full": null,
                                "flat": null,
                                "flat_area": null,
                                "square_meter_price": null,
                                "flat_price": null,
                                "postal_box": null,
                                "fias_id": "eccb1242-e9ab-41e1-a8e1-d05e078beda3",
                                "fias_code": "24000001000000010150001",
                                "fias_level": "8",
                                "fias_actuality_state": "0",
                                "kladr_id": "2400000100010150001",
                                "geoname_id": "1502026",
                                "capital_marker": "2",
                                "okato": "04401368000",
                                "oktmo": "04701000001",
                                "tax_office": "2461",
                                "tax_office_legal": "2461",
                                "timezone": "UTC+7",
                                "geo_lat": "56.0176798",
                                "geo_lon": "92.9989258",
                                "beltway_hit": null,
                                "beltway_distance": null,
                                "metro": null,
                                "qc_geo": "0",
                                "qc_complete": null,
                                "qc_house": null,
                                "history_values": null,
                                "unparsed_parts": null,
                                "source": "660123, КРАЙ КРАСНОЯРСКИЙ, ГОРОД КРАСНОЯРСК, ПРОЕЗД ТРАНСПОРТНЫЙ, 1",
                                "qc": "0"
                            }
                        },
                        "phones": null,
                        "emails": null,
                        "ogrn_date": 1028160000000,
                        "okved_type": "2014",
                        "employee_count": null
                    }
                },
                {
                    "value": "ФИЛИАЛ ОАО \"КРАСЦВЕТМЕТ\"",
                    "unrestricted_value": "ФИЛИАЛ ОАО \"КРАСЦВЕТМЕТ\"",
                    "data": {
                        "kpp": null,
                        "capital": null,
                        "management": null,
                        "founders": null,
                        "managers": null,
                        "predecessors": null,
                        "successors": null,
                        "branch_type": "BRANCH",
                        "branch_count": 0,
                        "source": null,
                        "qc": null,
                        "hid": "e0e882171988aed80a95a2a3228e960ad939e83590a757bd52ca77e5c97477fa",
                        "type": "LEGAL",
                        "state": {
                            "status": "ACTIVE",
                            "code": null,
                            "actuality_date": 1616544000000,
                            "registration_date": null,
                            "liquidation_date": null
                        },
                        "opf": {
                            "type": "2014",
                            "code": "30002",
                            "full": "Филиал юридического лица",
                            "short": "Филиал"
                        },
                        "name": {
                            "full_with_opf": "ФИЛИАЛ ОАО \"КРАСЦВЕТМЕТ\"",
                            "short_with_opf": "ФИЛИАЛ ОАО \"КРАСЦВЕТМЕТ\"",
                            "latin": null,
                            "full": "ФИЛИАЛ ОАО КРАСЦВЕТМЕТ",
                            "short": "ФИЛИАЛ ОАО \"КРАСЦВЕТМЕТ\""
                        },
                        "inn": "2451000818",
                        "ogrn": "1022402056324",
                        "okpo": null,
                        "okato": null,
                        "oktmo": null,
                        "okogu": null,
                        "okfs": null,
                        "okved": null,
                        "okveds": null,
                        "authorities": null,
                        "documents": null,
                        "licenses": null,
                        "finance": null,
                        "address": {
                            "value": "г Екатеринбург, ул Шейнкмана, д 134А стр 9-13",
                            "unrestricted_value": "620144, Свердловская обл, г Екатеринбург, Ленинский р-н, ул Шейнкмана, д 134А стр 9-13",
                            "data": {
                                "postal_code": "620144",
                                "country": "Россия",
                                "country_iso_code": "RU",
                                "federal_district": "Уральский",
                                "region_fias_id": "92b30014-4d52-4e2e-892d-928142b924bf",
                                "region_kladr_id": "6600000000000",
                                "region_iso_code": "RU-SVE",
                                "region_with_type": "Свердловская обл",
                                "region_type": "обл",
                                "region_type_full": "область",
                                "region": "Свердловская",
                                "area_fias_id": null,
                                "area_kladr_id": null,
                                "area_with_type": null,
                                "area_type": null,
                                "area_type_full": null,
                                "area": null,
                                "city_fias_id": "2763c110-cb8b-416a-9dac-ad28a55b4402",
                                "city_kladr_id": "6600000100000",
                                "city_with_type": "г Екатеринбург",
                                "city_type": "г",
                                "city_type_full": "город",
                                "city": "Екатеринбург",
                                "city_area": null,
                                "city_district_fias_id": null,
                                "city_district_kladr_id": null,
                                "city_district_with_type": "Ленинский р-н",
                                "city_district_type": "р-н",
                                "city_district_type_full": "район",
                                "city_district": "Ленинский",
                                "settlement_fias_id": null,
                                "settlement_kladr_id": null,
                                "settlement_with_type": null,
                                "settlement_type": null,
                                "settlement_type_full": null,
                                "settlement": null,
                                "street_fias_id": "0e53d4e6-cd2c-4e27-8ac6-35ea17640f16",
                                "street_kladr_id": "66000001000127500",
                                "street_with_type": "ул Шейнкмана",
                                "street_type": "ул",
                                "street_type_full": "улица",
                                "street": "Шейнкмана",
                                "house_fias_id": null,
                                "house_kladr_id": null,
                                "house_type": "д",
                                "house_type_full": "дом",
                                "house": "134А",
                                "block_type": "стр",
                                "block_type_full": "строение",
                                "block": "9-13",
                                "entrance": null,
                                "floor": null,
                                "flat_fias_id": null,
                                "flat_type": null,
                                "flat_type_full": null,
                                "flat": null,
                                "flat_area": null,
                                "square_meter_price": null,
                                "flat_price": null,
                                "postal_box": null,
                                "fias_id": "0e53d4e6-cd2c-4e27-8ac6-35ea17640f16",
                                "fias_code": "66000001000000012750000",
                                "fias_level": "7",
                                "fias_actuality_state": "0",
                                "kladr_id": "66000001000127500",
                                "geoname_id": "1486209",
                                "capital_marker": "2",
                                "okato": "65401377000",
                                "oktmo": "65701000001",
                                "tax_office": "6671",
                                "tax_office_legal": "6671",
                                "timezone": "UTC+5",
                                "geo_lat": "56.8173893",
                                "geo_lon": "60.5909129",
                                "beltway_hit": null,
                                "beltway_distance": null,
                                "metro": [
                                    {
                                        "name": "Геологическая",
                                        "line": "Север-Юг",
                                        "distance": 1.3
                                    },
                                    {
                                        "name": "Чкаловская",
                                        "line": "Север-Юг",
                                        "distance": 1.6
                                    },
                                    {
                                        "name": "Площадь 1905 года",
                                        "line": "Север-Юг",
                                        "distance": 2.2
                                    }
                                ],
                                "qc_geo": "1",
                                "qc_complete": null,
                                "qc_house": null,
                                "history_values": null,
                                "unparsed_parts": null,
                                "source": "ОБЛАСТЬ СВЕРДЛОВСКАЯ, ГОРОД ЕКАТЕРИНБУРГ, УЛИЦА ШЕЙНКМАНА, 134А, 9-13",
                                "qc": "0"
                            }
                        },
                        "phones": null,
                        "emails": null,
                        "ogrn_date": null,
                        "okved_type": null,
                        "employee_count": null
                    }
                },
                {
                    "value": "ФИЛИАЛ ОАО \"КРАСЦВЕТМЕТ\" В Г. МОСКВЕ",
                    "unrestricted_value": "ФИЛИАЛ ОАО \"КРАСЦВЕТМЕТ\" В Г. МОСКВЕ",
                    "data": {
                        "kpp": "770343002",
                        "capital": null,
                        "management": null,
                        "founders": null,
                        "managers": null,
                        "predecessors": null,
                        "successors": null,
                        "branch_type": "BRANCH",
                        "branch_count": 0,
                        "source": null,
                        "qc": null,
                        "hid": "0323f8316d80dd505b802cf81ad0c7573c8de0b20d6f21f1175c828d1d298cc6",
                        "type": "LEGAL",
                        "state": {
                            "status": "ACTIVE",
                            "code": null,
                            "actuality_date": 1616544000000,
                            "registration_date": null,
                            "liquidation_date": null
                        },
                        "opf": {
                            "type": "2014",
                            "code": "30002",
                            "full": "Филиал юридического лица",
                            "short": "Филиал"
                        },
                        "name": {
                            "full_with_opf": "ФИЛИАЛ ОАО \"КРАСЦВЕТМЕТ\" В Г. МОСКВЕ",
                            "short_with_opf": "ФИЛИАЛ ОАО \"КРАСЦВЕТМЕТ\" В Г. МОСКВЕ",
                            "latin": null,
                            "full": "ФИЛИАЛ ОАО КРАСЦВЕТМЕТ В Г. МОСКВЕ",
                            "short": "ФИЛИАЛ ОАО \"КРАСЦВЕТМЕТ\" В Г. МОСКВЕ"
                        },
                        "inn": "2451000818",
                        "ogrn": "1022402056324",
                        "okpo": null,
                        "okato": null,
                        "oktmo": null,
                        "okogu": null,
                        "okfs": null,
                        "okved": null,
                        "okveds": null,
                        "authorities": null,
                        "documents": null,
                        "licenses": null,
                        "finance": null,
                        "address": {
                            "value": "г Москва, Пресненская наб, д 12",
                            "unrestricted_value": "123112, г Москва, Пресненский р-н, Пресненская наб, д 12",
                            "data": {
                                "postal_code": "123112",
                                "country": "Россия",
                                "country_iso_code": "RU",
                                "federal_district": "Центральный",
                                "region_fias_id": "0c5b2444-70a0-4932-980c-b4dc0d3f02b5",
                                "region_kladr_id": "7700000000000",
                                "region_iso_code": "RU-MOW",
                                "region_with_type": "г Москва",
                                "region_type": "г",
                                "region_type_full": "город",
                                "region": "Москва",
                                "area_fias_id": null,
                                "area_kladr_id": null,
                                "area_with_type": null,
                                "area_type": null,
                                "area_type_full": null,
                                "area": null,
                                "city_fias_id": "0c5b2444-70a0-4932-980c-b4dc0d3f02b5",
                                "city_kladr_id": "7700000000000",
                                "city_with_type": "г Москва",
                                "city_type": "г",
                                "city_type_full": "город",
                                "city": "Москва",
                                "city_area": "Центральный",
                                "city_district_fias_id": null,
                                "city_district_kladr_id": null,
                                "city_district_with_type": "Пресненский р-н",
                                "city_district_type": "р-н",
                                "city_district_type_full": "район",
                                "city_district": "Пресненский",
                                "settlement_fias_id": null,
                                "settlement_kladr_id": null,
                                "settlement_with_type": null,
                                "settlement_type": null,
                                "settlement_type_full": null,
                                "settlement": null,
                                "street_fias_id": "8181e3aa-137c-4187-9fd6-fceb252142d1",
                                "street_kladr_id": "77000000000738800",
                                "street_with_type": "Пресненская наб",
                                "street_type": "наб",
                                "street_type_full": "набережная",
                                "street": "Пресненская",
                                "house_fias_id": "745e543b-8690-4dca-9d78-858876340cdd",
                                "house_kladr_id": "7700000000073880004",
                                "house_type": "д",
                                "house_type_full": "дом",
                                "house": "12",
                                "block_type": null,
                                "block_type_full": null,
                                "block": null,
                                "entrance": null,
                                "floor": null,
                                "flat_fias_id": null,
                                "flat_type": null,
                                "flat_type_full": null,
                                "flat": null,
                                "flat_area": null,
                                "square_meter_price": "562338",
                                "flat_price": null,
                                "postal_box": null,
                                "fias_id": "745e543b-8690-4dca-9d78-858876340cdd",
                                "fias_code": "77000000000000073880004",
                                "fias_level": "8",
                                "fias_actuality_state": "0",
                                "kladr_id": "7700000000073880004",
                                "geoname_id": "524901",
                                "capital_marker": "0",
                                "okato": "45286575000",
                                "oktmo": "45380000",
                                "tax_office": "7703",
                                "tax_office_legal": "7703",
                                "timezone": "UTC+3",
                                "geo_lat": "55.749588",
                                "geo_lon": "37.5371164",
                                "beltway_hit": "IN_MKAD",
                                "beltway_distance": null,
                                "metro": [
                                    {
                                        "name": "Деловой центр",
                                        "line": "Большая кольцевая линия",
                                        "distance": 0.2
                                    },
                                    {
                                        "name": "Международная",
                                        "line": "Филёвская",
                                        "distance": 0.3
                                    },
                                    {
                                        "name": "Выставочная",
                                        "line": "Филёвская",
                                        "distance": 0.4
                                    }
                                ],
                                "qc_geo": "0",
                                "qc_complete": null,
                                "qc_house": null,
                                "history_values": null,
                                "unparsed_parts": null,
                                "source": "123317, ГОРОД МОСКВА, НАБЕРЕЖНАЯ ПРЕСНЕНСКАЯ, ДОМ 12",
                                "qc": "0"
                            }
                        },
                        "phones": null,
                        "emails": null,
                        "ogrn_date": null,
                        "okved_type": null,
                        "employee_count": null
                    }
                }
            ]
        },
        "condition": {},
        "last_updated": "2021-02-28 15:35:12"
    },
    {
        "_id": "gt56qw8c6fj3ds6se01",
        "inn": "2464235341",
        "name": "ООО Роса",
        "manager": "608af5e931f85fb848ae1079",
        "status": "hot",
        "role": "client",
        "region": ["Москва"],
        "competitors": "",
        "tags": ["#хорошийклиент", "#торговля", "#лекарства", "#аптека", "#розница"],
        "contacts": [{
            "_id":  "d6s65f5fs632fs8ere5",
            "name": "Юрьев Игорь Михайлович",
            "position": "Руководитель",
            "phones": ["+74995062230", "+79055302189"],
            "email": "rosa_company@mail.ru",
            "comment": ""
        },
        {
            "_id":  "3q6d56scS56a3e7rea6",
            "name": "Рязанова Светлана Сергеевна",
            "position": "Заместитель",
            "phones": ["+74958506387"],
            "email": "rosa_company@mail.ru",
            "comment": ""
        }],
        "company": {
            "suggestions": [
                {
                    "value": "ООО \"РОСА\"",
                    "unrestricted_value": "ООО \"РОСА\"",
                    "data": {
                        "kpp": "770601001",
                        "capital": null,
                        "management": {
                            "name": "Кокова Ирина Александровна",
                            "post": "директор",
                            "disqualified": null
                        },
                        "founders": null,
                        "managers": null,
                        "predecessors": null,
                        "successors": null,
                        "branch_type": "MAIN",
                        "branch_count": 0,
                        "source": null,
                        "qc": null,
                        "hid": "449703db741d1d683a33306977d4924fd14211185f4f4c910da2d3c1abdb21c8",
                        "type": "LEGAL",
                        "state": {
                            "status": "ACTIVE",
                            "code": null,
                            "actuality_date": 1610409600000,
                            "registration_date": 1308614400000,
                            "liquidation_date": null
                        },
                        "opf": {
                            "type": "2014",
                            "code": "12300",
                            "full": "Общество с ограниченной ответственностью",
                            "short": "ООО"
                        },
                        "name": {
                            "full_with_opf": "ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ \"РОСА\"",
                            "short_with_opf": "ООО \"РОСА\"",
                            "latin": null,
                            "full": "РОСА",
                            "short": "РОСА"
                        },
                        "inn": "2464235341",
                        "ogrn": "1112468036559",
                        "okpo": "91872295",
                        "okato": "45286596000",
                        "oktmo": "45384000000",
                        "okogu": "4210014",
                        "okfs": "16",
                        "okved": "47.73",
                        "okveds": null,
                        "authorities": null,
                        "documents": null,
                        "licenses": null,
                        "finance": {
                            "tax_system": null,
                            "income": null,
                            "expense": null,
                            "debt": null,
                            "penalty": null,
                            "year": null
                        },
                        "address": {
                            "value": "119017, ГОРОД МОСКВА, ПЕРЕУЛОК ПЫЖЕВСКИЙ, ДОМ 5, СТРОЕНИЕ 1, ЭТ I ПОМ I ОФИС 116",
                            "unrestricted_value": "119017, ГОРОД МОСКВА, ПЕРЕУЛОК ПЫЖЕВСКИЙ, ДОМ 5, СТРОЕНИЕ 1, ЭТ I ПОМ I ОФИС 116",
                            "data": {
                                "postal_code": "119017",
                                "country": "Россия",
                                "country_iso_code": "RU",
                                "federal_district": "Центральный",
                                "region_fias_id": "0c5b2444-70a0-4932-980c-b4dc0d3f02b5",
                                "region_kladr_id": "7700000000000",
                                "region_iso_code": "RU-MOW",
                                "region_with_type": "г Москва",
                                "region_type": "г",
                                "region_type_full": "город",
                                "region": "Москва",
                                "area_fias_id": null,
                                "area_kladr_id": null,
                                "area_with_type": null,
                                "area_type": null,
                                "area_type_full": null,
                                "area": null,
                                "city_fias_id": "0c5b2444-70a0-4932-980c-b4dc0d3f02b5",
                                "city_kladr_id": "7700000000000",
                                "city_with_type": "г Москва",
                                "city_type": "г",
                                "city_type_full": "город",
                                "city": "Москва",
                                "city_area": "Центральный",
                                "city_district_fias_id": null,
                                "city_district_kladr_id": null,
                                "city_district_with_type": "р-н Якиманка",
                                "city_district_type": "р-н",
                                "city_district_type_full": "район",
                                "city_district": "Якиманка",
                                "settlement_fias_id": null,
                                "settlement_kladr_id": null,
                                "settlement_with_type": null,
                                "settlement_type": null,
                                "settlement_type_full": null,
                                "settlement": null,
                                "street_fias_id": "5c83e863-74cd-43f1-a13c-04a829b79d30",
                                "street_kladr_id": "77000000000242100",
                                "street_with_type": "Пыжевский пер",
                                "street_type": "пер",
                                "street_type_full": "переулок",
                                "street": "Пыжевский",
                                "house_fias_id": "a2202734-1941-44f6-9d59-3fd0b04f6e5c",
                                "house_kladr_id": "7700000000024210003",
                                "house_type": "д",
                                "house_type_full": "дом",
                                "house": "5",
                                "block_type": "стр",
                                "block_type_full": "строение",
                                "block": "1",
                                "entrance": null,
                                "floor": null,
                                "flat_fias_id": null,
                                "flat_type": null,
                                "flat_type_full": null,
                                "flat": null,
                                "flat_area": null,
                                "square_meter_price": null,
                                "flat_price": null,
                                "postal_box": null,
                                "fias_id": "a2202734-1941-44f6-9d59-3fd0b04f6e5c",
                                "fias_code": "77000000000000024210003",
                                "fias_level": "8",
                                "fias_actuality_state": "0",
                                "kladr_id": "7700000000024210003",
                                "geoname_id": "524901",
                                "capital_marker": "0",
                                "okato": "45286596000",
                                "oktmo": "45384000",
                                "tax_office": "7706",
                                "tax_office_legal": "7706",
                                "timezone": "UTC+3",
                                "geo_lat": "55.738892",
                                "geo_lon": "37.622423",
                                "beltway_hit": "IN_MKAD",
                                "beltway_distance": null,
                                "metro": [
                                    {
                                        "name": "Третьяковская",
                                        "line": "Калужско-Рижская",
                                        "distance": 0.3
                                    },
                                    {
                                        "name": "Полянка",
                                        "line": "Серпуховско-Тимирязевская",
                                        "distance": 0.3
                                    },
                                    {
                                        "name": "Третьяковская",
                                        "line": "Калининская",
                                        "distance": 0.3
                                    }
                                ],
                                "qc_geo": "0",
                                "qc_complete": null,
                                "qc_house": null,
                                "history_values": null,
                                "unparsed_parts": null,
                                "source": "119017, ГОРОД МОСКВА, ПЕРЕУЛОК ПЫЖЕВСКИЙ, ДОМ 5, СТРОЕНИЕ 1, ЭТ I ПОМ I ОФИС 116",
                                "qc": "1"
                            }
                        },
                        "phones": null,
                        "emails": null,
                        "ogrn_date": 1308614400000,
                        "okved_type": "2014",
                        "employee_count": null
                    }
                }
            ]
        },
        "condition": {},
        "last_updated": "2021-03-12 10:02:15"
    },
    {
        "_id": "d67qw5d20d3fd3ge3k6",
        "inn": "3019003748",
        "name": 'ООО "Металл-Плюс"',
        "manager": "608af5e931f85fb848ae1079",
        "status": "new",
        "role": "lid",
        "region": ["Астраханская область"],
        "competitors": "",
        "tags": ["#торговля", "#металл", "#опт"],
        "contacts": [],
        "company": {},
        "condition": {},
        "last_updated": ""
    },
    {
        "_id": "x9dew6hjg877k5g4k3h",
        "inn": "2309085638",
        "name": "ООО Магнит",
        "manager": "608af5e931f85fb848ae1079",
        "status": "hot",
        "role": "client",
        "region": ["Краснодарский край"],
        "competitors": "",
        "tags": ["#недвижимость", "#аренда", "#управление"],
        "contacts": [
            {
                "_id":  "b2f6e89ds53as5fq65e",
                "name": "Васильев Константин Викторович",
                "position": "Руководитель",
                "phones": ["+73987954623"],
                "email": "vasilyev_kv@magmit.ru",
                "comment": "Общие вопросы"
            },
            {
                "_id":  "r9y6t55gsd21f6fq78w",
                "name": "Ларина Юлия Николаевна",
                "position": "Заместитель",
                "phones": ["+73985645895"],
                "email": "larina_yn@magmit.ruu",
                "comment": "Юридические вопросы"
            },
            {
                "_id":  "7r5fd855w5dsf8a9w5z",
                "name": "Зорин Иван Викторович",
                "position": "Заместитель",
                "phones": ["+79285678832"],
                "email": "zorin_iv@magmit.ruu",
                "comment": "Закупки"
            }
        ],
        "company": {
            "suggestions": [
                {
                "value": "ПАО \"МАГНИТ\"",
                "unrestricted_value": "ПАО \"МАГНИТ\"",
                "data": {
                    "kpp": "231101001",
                    "capital": null,
                    "management": {
                        "name": "Дюннинг Ян Гезинюс",
                        "post": "ГЕНЕРАЛЬНЫЙ ДИРЕКТОР",
                        "disqualified": null
                    },
                    "founders": null,
                    "managers": null,
                    "predecessors": null,
                    "successors": null,
                    "branch_type": "MAIN",
                    "branch_count": 0,
                    "source": null,
                    "qc": null,
                    "hid": "11249e5de12dc995614d851dd8da5bea1f973be7f36007b9152755c09bf0bc2a",
                    "type": "LEGAL",
                    "state": {
                        "status": "ACTIVE",
                        "code": null,
                        "actuality_date": 1612396800000,
                        "registration_date": 1068595200000,
                        "liquidation_date": null
                    },
                    "opf": {
                        "type": "2014",
                        "code": "12247",
                        "full": "Публичное акционерное общество",
                        "short": "ПАО"
                    },
                    "name": {
                        "full_with_opf": "ПУБЛИЧНОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО \"МАГНИТ\"",
                        "short_with_opf": "ПАО \"МАГНИТ\"",
                        "latin": null,
                        "full": "МАГНИТ",
                        "short": "МАГНИТ"
                    },
                    "inn": "2309085638",
                    "ogrn": "1032304945947",
                    "okpo": "70771130",
                    "okato": "03401370000",
                    "oktmo": "03701000001",
                    "okogu": "4210014",
                    "okfs": "16",
                    "okved": "68.20.2",
                    "okveds": null,
                    "authorities": null,
                    "documents": null,
                    "licenses": null,
                    "finance": {
                        "tax_system": null,
                        "income": null,
                        "expense": null,
                        "debt": null,
                        "penalty": null,
                        "year": null
                    },
                    "address": {
                        "value": "г Краснодар, ул Солнечная, д 15/5",
                        "unrestricted_value": "350072, Краснодарский край, г Краснодар, ул Солнечная, д 15/5",
                        "data": {
                            "postal_code": "350072",
                            "country": "Россия",
                            "country_iso_code": "RU",
                            "federal_district": "Южный",
                            "region_fias_id": "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
                            "region_kladr_id": "2300000000000",
                            "region_iso_code": "RU-KDA",
                            "region_with_type": "Краснодарский край",
                            "region_type": "край",
                            "region_type_full": "край",
                            "region": "Краснодарский",
                            "area_fias_id": null,
                            "area_kladr_id": null,
                            "area_with_type": null,
                            "area_type": null,
                            "area_type_full": null,
                            "area": null,
                            "city_fias_id": "7dfa745e-aa19-4688-b121-b655c11e482f",
                            "city_kladr_id": "2300000100000",
                            "city_with_type": "г Краснодар",
                            "city_type": "г",
                            "city_type_full": "город",
                            "city": "Краснодар",
                            "city_area": null,
                            "city_district_fias_id": null,
                            "city_district_kladr_id": null,
                            "city_district_with_type": null,
                            "city_district_type": null,
                            "city_district_type_full": null,
                            "city_district": null,
                            "settlement_fias_id": null,
                            "settlement_kladr_id": null,
                            "settlement_with_type": null,
                            "settlement_type": null,
                            "settlement_type_full": null,
                            "settlement": null,
                            "street_fias_id": "777d0603-f4c7-40dd-91bb-ec83af36d4a1",
                            "street_kladr_id": "23000001000069500",
                            "street_with_type": "ул Солнечная",
                            "street_type": "ул",
                            "street_type_full": "улица",
                            "street": "Солнечная",
                            "house_fias_id": "a24c96be-1c06-490f-9f35-52ffaa33ac38",
                            "house_kladr_id": "2300000100006950056",
                            "house_type": "д",
                            "house_type_full": "дом",
                            "house": "15/5",
                            "block_type": null,
                            "block_type_full": null,
                            "block": null,
                            "entrance": null,
                            "floor": null,
                            "flat_fias_id": null,
                            "flat_type": null,
                            "flat_type_full": null,
                            "flat": null,
                            "flat_area": "337.5",
                            "square_meter_price": null,
                            "flat_price": null,
                            "postal_box": null,
                            "fias_id": "a24c96be-1c06-490f-9f35-52ffaa33ac38",
                            "fias_code": "23000001000000006950056",
                            "fias_level": "8",
                            "fias_actuality_state": "0",
                            "kladr_id": "2300000100006950056",
                            "geoname_id": "542420",
                            "capital_marker": "2",
                            "okato": "03401000000",
                            "oktmo": "03701000001",
                            "tax_office": "2311",
                            "tax_office_legal": "2311",
                            "timezone": "UTC+3",
                            "geo_lat": "45.0741722",
                            "geo_lon": "39.0028061",
                            "beltway_hit": null,
                            "beltway_distance": null,
                            "metro": null,
                            "qc_geo": "0",
                            "qc_complete": null,
                            "qc_house": null,
                            "history_values": null,
                            "unparsed_parts": null,
                            "source": "350072, КРАЙ КРАСНОДАРСКИЙ, ГОРОД КРАСНОДАР, УЛИЦА СОЛНЕЧНАЯ, 15, 5",
                            "qc": "0"
                        }
                    },
                    "phones": null,
                    "emails": null,
                    "ogrn_date": 1068595200000,
                    "okved_type": "2014",
                    "employee_count": null
                }
            }
            ]
        },
        "condition": {
            "status": "success",
            "data": {
                "url": "https://testfirm.ru/result/2309085638_pao-magnit",
                "org": {
                    "inn": "2309085638",
                    "name": "ПАО \"МАГНИТ\"",
                    "okved": "68.20.2",
                    "okved_text": "Аренда и управление собственным или арендованным нежилым недвижимым имуществом",
                    "revenue": 665891000,
                    "assets": 206529031000,
                    "org_group": 3,
                    "org_group_text": "малые предприятия (120 - 800 млн. руб.)",
                    "region": "23",
                    "region_text": "Краснодарский край",
                    "stat_year": 2019
                },
                "tax": {
                    "employees": {
                        "year": 2019,
                        "data": "48"
                    },
                    "taxes": {
                        "year": 2019,
                        "data": [
                            {
                                "name": "Страховые взносы на обязательное медицинское страхование работающего населения, зачисляемые в бюджет Федерального фонда обязательного медицинского страхования",
                                "value": 16418199
                            },
                            {
                                "name": "Налог на добавленную стоимость",
                                "value": 122799609
                            },
                            {
                                "name": "Страховые взносы на обязательное социальное страхование на случай временной нетрудоспособности и в связи с материнством",
                                "value": 0
                            },
                            {
                                "name": "Страховые и другие взносы на обязательное пенсионное страхование, зачисляемые в Пенсионный фонд Российской Федерации",
                                "value": 52936980
                            },
                            {
                                "name": "Налог на прибыль",
                                "value": 149921410
                            },
                            {
                                "name": "Налог на имущество организаций",
                                "value": 24357500
                            },
                            {
                                "name": "Земельный налог",
                                "value": 2181732
                            },
                            {
                                "name": "НЕНАЛОГОВЫЕ ДОХОДЫ, администрируемые налоговыми органами",
                                "value": 0
                            }
                        ],
                        "taxes_sum": 368615430
                    }
                },
                "result": {
                    "industry": {
                        "okved": "68.20.2",
                        "okved_text": "Аренда и управление собственным или арендованным нежилым недвижимым имуществом",
                        "score": 0.889,
                        "score_text": "лучше",
                        "score_longtext": "Финансовое состояние организации лучше среднего по отрасли."
                    },
                    "all": {
                        "score": 1,
                        "score_text": "лучше",
                        "score_longtext": "Финансовое состояние организации лучше среднего по РФ."
                    }
                },
                "change": {
                    "value": -0.444,
                    "value_text": "ухудшилось"
                },
                "details": {
                    "avtonom": {
                        "title": "Коэффициент автономии",
                        "value": 0.681,
                        "industry_mediana": 0.426,
                        "industry_rank": 1,
                        "all_mediana": 0.215,
                        "all_rank": 2
                    },
                    "sosobesp": {
                        "title": "Коэффициент обеспеченности собственными оборотными средствами",
                        "value": -0.187,
                        "industry_mediana": -0.603,
                        "industry_rank": 1,
                        "all_mediana": 0.11,
                        "all_rank": -2
                    },
                    "pokrinvest": {
                        "title": "Коэффициент покрытия инвестиций",
                        "value": 0.875,
                        "industry_mediana": 0.871,
                        "industry_rank": 0,
                        "all_mediana": 0.339,
                        "all_rank": 2
                    },
                    "CurrentRatio": {
                        "title": "Коэффициент текущей ликвидности",
                        "value": 2.143,
                        "industry_mediana": 1.469,
                        "industry_rank": 1,
                        "all_mediana": 1.277,
                        "all_rank": 1
                    },
                    "QuickRatio": {
                        "title": "Коэффициент быстрой ликвидности",
                        "value": 2.143,
                        "industry_mediana": 1.222,
                        "industry_rank": 1,
                        "all_mediana": 0.954,
                        "all_rank": 2
                    },
                    "CashRatio": {
                        "title": "Коэффициент абсолютной ликвидности",
                        "value": 2.025,
                        "industry_mediana": 0.236,
                        "industry_rank": 2,
                        "all_mediana": 0.085,
                        "all_rank": 2
                    },
                    "ROA": {
                        "title": "Рентабельность активов",
                        "value": 0.23,
                        "industry_mediana": 0.037,
                        "industry_rank": 2,
                        "all_mediana": 0.048,
                        "all_rank": 2
                    },
                    "ProfitMargin": {
                        "title": "Норма чистой прибыли",
                        "value": 60.823,
                        "industry_mediana": 0.105,
                        "industry_rank": 2,
                        "all_mediana": 0.016,
                        "all_rank": 2
                    },
                    "GrossMargin": {
                        "title": "Рентабельность продаж",
                        "value": -1.44,
                        "industry_mediana": 0.275,
                        "industry_rank": -2,
                        "all_mediana": 0.03,
                        "all_rank": -2
                    },
                    "mobilos": {
                        "title": "Коэффициент мобильности имущества",
                        "value": 0.269,
                        "industry_mediana": 0.244,
                        "industry_rank": 0,
                        "all_mediana": 0.965,
                        "all_rank": -2
                    },
                    "obesmpz": {
                        "title": "Коэффициент обеспеченности запасов",
                        "value": -1073.853,
                        "industry_mediana": -14.24,
                        "industry_rank": -2,
                        "all_mediana": 0.421,
                        "all_rank": -2
                    },
                    "ROS": {
                        "title": "Рентабельность продаж по EBIT",
                        "value": 64.161,
                        "industry_mediana": 0.283,
                        "industry_rank": 2,
                        "all_mediana": 0.027,
                        "all_rank": 2
                    },
                    "ICR": {
                        "title": "Коэффициент покрытия процентов к уплате",
                        "value": 21.166,
                        "industry_mediana": 1.913,
                        "industry_rank": 2,
                        "all_mediana": 5.396,
                        "all_rank": 1
                    },
                    "ROE": {
                        "title": "Рентабельность собственного капитала",
                        "value": 0.297,
                        "industry_mediana": 0.127,
                        "industry_rank": 1,
                        "all_mediana": 0.345,
                        "all_rank": -1
                    },
                    "fondootd": {
                        "title": "Фондоотдача",
                        "value": 1.004,
                        "industry_mediana": 0.952,
                        "industry_rank": 0,
                        "all_mediana": 44.253,
                        "all_rank": -2
                    },
                    "CAssetTurnover": {
                        "title": "Оборачиваемость оборотных активов, в днях",
                        "value": 33144.251,
                        "industry_mediana": 184.932,
                        "industry_rank": 2,
                        "all_mediana": 117.615,
                        "all_rank": 2
                    },
                    "ReceivablesTurnover": {
                        "title": "Оборачиваемость дебиторской задолженности, в днях",
                        "value": 2693.096,
                        "industry_mediana": 77.272,
                        "industry_rank": 2,
                        "all_mediana": 53.175,
                        "all_rank": 2
                    },
                    "AssetTurnover": {
                        "title": "Оборачиваемость активов, в днях",
                        "value": 96686.261,
                        "industry_mediana": 1152.82,
                        "industry_rank": 2,
                        "all_mediana": 143.139,
                        "all_rank": 2
                    }
                },
                "full_report": "<h2>Сравнительный финансовый анализ показателей ПАО &quot;МАГНИТ&quot; за 2019 год</h2>\n        <h3>1. Сравнение со среднеотраслевыми показателями</h3>\n        <p>Ниже приведено сравнение ключевых финансовых показателей ПАО &quot;МАГНИТ&quot; за 2019 год с аналогичными среднеотраслевыми показателями за 2019 год. В качестве среднеотраслевых показателей взяты показатели 1,32 тыс. организаций с выручкой 120 - 800 млн. руб., занимающиеся видом деятельности \"Аренда и управление собственным или арендованным нежилым недвижимым имуществом\" (код по ОКВЭД2 68.20.2). В качестве среднего показателя использовано медианное значение, смысл которого в следующем: половина (50%) всех организаций имеют показатель выше медианного, другая половина – ниже.</p>\n        <h3>1.1. Финансовая устойчивость организации</h3>\n        <div class=\"table-adapt\">\n        <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                    <th rowspan=\"2\" class=\"text-center\">\n                        Показатели\n                    </th>\n                    <th rowspan=\"2\" class=\"text-center\">\n                        ПАО &quot;МАГНИТ&quot;, 2019 г.\n                    </th>\n                    <th colspan=\"3\" class=\"text-center\">Отраслевые показатели, 2019 г.</th>\n                </tr>\n                <tr>\n                    <th class=\"text-center\">Существенно хуже* среднего</th>\n                    <th class=\"text-center\">Среднеотраслевое значение</th>\n                    <th class=\"text-center\">Существенно лучше** среднего</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td rowspan=\"2\">Коэффициент автономии</td>\n                    <td class=\"text-center\"><span class=\"green-value\">0,68</span></td>\n                    <td class=\"text-center\">&le;0,09</td>\n                    <td class=\"text-center\">0,43</td>\n                    <td class=\"text-center\">&ge;0,81</td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\"> Значение коэффициента лучше среднеотраслевого, как минимум половина аналогичных организаций имеют меньшую долю собственных средств, то есть обладают меньшей финансовой устойчивостью.</td>\n                </tr>\n                <tr>\n                    <td rowspan=\"2\">Коэффициент обеспеченности собственными оборотными средствами</td>\n                    <td class=\"text-center\"><span class=\"green-value\">-0,19</span></td>\n                    <td class=\"text-center\">&le;-4,93</td>\n                    <td class=\"text-center\">-0,6</td>\n                    <td class=\"text-center\">&ge;0,37</td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\">Отрицательное значение коэффициента вызвано тем, что величина внеоборотных активов организации превышает собственный капитал. Соответственно, часть внеоборотных и все оборотные активы профинансированы за счет заемного капитала.</td>\n                </tr>\n                <tr>\n                    <td rowspan=\"2\">Коэффициент обеспеченности запасов</td>\n                    <td class=\"text-center\"><span class=\"red-value\">-1073,85</span></td>\n                    <td class=\"text-center\">&le;-556,53</td>\n                    <td class=\"text-center\">-14,24</td>\n                    <td class=\"text-center\">&ge;9,59</td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\">Коэффициент обеспеченности запасов показывает степень покрытия имеющихся у организации материально-производственных запасов собственными средствами.Как и в случае с коэффициентом обеспеченности собственными оборотными средствами, отрицательное значение обусловлено тем, что внеоборотные активы больше собственного капитала.</td>\n                </tr>\n                <tr>\n                    <td rowspan=\"2\">Коэффициент покрытия инвестиций</td>\n                    <td class=\"text-center\"><span class=\"green-value\">0,87</span></td>\n                    <td class=\"text-center\">&le;0,65</td>\n                    <td class=\"text-center\">0,87</td>\n                    <td class=\"text-center\">&ge;0,95</td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\">Значительная доля собственного и долгосрочного заемного капитала в общем капитале организации обеспечила коэффициент покрытия инвестиций, превосходящий среднеотраслевой.</td>\n                </tr>\n            </tbody>\n        </table>\n        </div>\n        <h3>1.2. Платежеспособность ПАО &quot;МАГНИТ&quot;</h3>\n        <p></p>\n        \n        <div class=\"table-adapt\">\n        <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                    <th rowspan=\"2\" class=\"text-center\">\n                        Показатели\n                    </th>\n                    <th rowspan=\"2\" class=\"text-center\">\n                        ПАО &quot;МАГНИТ&quot;, 2019 г.\n                    </th>\n                    <th colspan=\"3\" class=\"text-center\">Отраслевые показатели, 2019 г.</th>\n                </tr>\n                <tr>\n                    <th class=\"text-center\">Существенно хуже* среднего</th>\n                    <th class=\"text-center\">Среднеотраслевое значение</th>\n                    <th class=\"text-center\">Существенно лучше** среднего</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td rowspan=\"2\">Коэффициент текущей ликвидности</td>\n                    <td class=\"text-center\"><span class=\"green-value\">2,14</span></td>\n                    <td class=\"text-center\">&le;0,63</td>\n                    <td class=\"text-center\">1,47</td>\n                    <td class=\"text-center\">&ge;3,89</td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\">Утрата платежеспособности в долгосрочной или среднесрочной перспективе угрожает ПАО &quot;МАГНИТ&quot; меньше, чем большинству аналогичных организаций.</td>\n                </tr>\n                <tr>\n                    <td rowspan=\"2\">Коэффициент быстрой ликвидности</td>\n                    <td class=\"text-center\"><span class=\"green-value\">2,14</span></td>\n                    <td class=\"text-center\">&le;0,48</td>\n                    <td class=\"text-center\">1,22</td>\n                    <td class=\"text-center\">&ge;3,5</td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\">Ликвидные активы покрывают краткосрочные обязательства лучше, чем у большинства других предприятий отрасли, снижая риск утраты платежеспособности в среднесрочной перспективе.</td>\n                </tr>\n                <tr>\n                    <td rowspan=\"2\">Коэффициент абсолютной ликвидности</td>\n                    <td class=\"text-center\"><span class=\"green-value\">2,02</span></td>\n                    <td class=\"text-center\">&le;0,03</td>\n                    <td class=\"text-center\">0,24</td>\n                    <td class=\"text-center\">&ge;1,18</td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\">Доля краткосрочных обязательств, обеспеченных высоколиквидными активами организации, намного выше, чем у большинства аналогичных предприятий. Это говорит об отсутствии риска кассовых разрывов при погашении текущих обязательств.</td>\n                </tr>\n            </tbody>\n        </table>\n        </div>\n        \n\n        <h3>1.3. Рентабельность деятельности</h3>\n        <p></p>\n        \n        <div class=\"table-adapt\">\n        <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                    <th rowspan=\"2\" class=\"text-center\">\n                        Показатели\n                    </th>\n                    <th rowspan=\"2\" class=\"text-center\">\n                        ПАО &quot;МАГНИТ&quot;, 2019 г.\n                    </th>\n                    <th colspan=\"3\" class=\"text-center\">Отраслевые показатели, 2019 г.</th>\n                </tr>\n                <tr>\n                    <th class=\"text-center\">Существенно хуже* среднего</th>\n                    <th class=\"text-center\">Среднеотраслевое значение</th>\n                    <th class=\"text-center\">Существенно лучше** среднего</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td rowspan=\"2\">Рентабельность продаж</td>\n                    <td class=\"text-center\"><span class=\"red-value\">-143,98%</span></td>\n                    <td class=\"text-center\">&le;9,71%</td>\n                    <td class=\"text-center\">27,5%</td>\n                    <td class=\"text-center\">&ge;46,8%</td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\">Организация в 2019 году получила убыток от продаж, что обусловило отрицательный показатель рентабельности.</td>\n                </tr>\n                <tr>\n                    <td rowspan=\"2\">Рентабельность продаж по EBIT</td>\n                    <td class=\"text-center\"><span class=\"green-value\">6416%</span></td>\n                    <td class=\"text-center\">&le;8,03%</td>\n                    <td class=\"text-center\">28,3%</td>\n                    <td class=\"text-center\">&ge;50,6%</td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\">Значительно выше среднего.</td>\n                </tr>\n                <tr>\n                    <td rowspan=\"2\">Норма чистой прибыли</td>\n                    <td class=\"text-center\"><span class=\"green-value\">6082%</span></td>\n                    <td class=\"text-center\">&le;0,55%</td>\n                    <td class=\"text-center\">10,5%</td>\n                    <td class=\"text-center\">&ge;29,3%</td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\">Норма чистой прибыли показывает, сколько копеек чистой прибыли получает организация в каждом рубле выручки.У ПАО &quot;МАГНИТ&quot; высокая норма чистой прибыли, этот показатель выше, чем как минимум у 75% аналогичных организаций.</td>\n                </tr>\n                <tr>\n                    <td rowspan=\"2\">Коэффициент покрытия процентов к уплате</td>\n                    <td class=\"text-center\"><span class=\"green-value\">21,2</span></td>\n                    <td class=\"text-center\">&le;1,07</td>\n                    <td class=\"text-center\">1,91</td>\n                    <td class=\"text-center\">&ge;5,61</td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\">Нагрузка по обслуживанию заемных средств организацией в 2019 году была существенно ниже среднеотраслевой.</td>\n                </tr>\n                <tr>\n                    <td rowspan=\"2\">Рентабельность активов</td>\n                    <td class=\"text-center\"><span class=\"green-value\">23%</span></td>\n                    <td class=\"text-center\">&le;0,25%</td>\n                    <td class=\"text-center\">3,72%</td>\n                    <td class=\"text-center\">&ge;11,5%</td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\">Отдача от использования всех активов значительно вышесреднеотраслевой.</td>\n                </tr>\n                <tr>\n                    <td rowspan=\"2\">Рентабельность собственного капитала</td>\n                    <td class=\"text-center\"><span class=\"green-value\">29,7%</span></td>\n                    <td class=\"text-center\">&le;2,3%</td>\n                    <td class=\"text-center\">12,7%</td>\n                    <td class=\"text-center\">&ge;36,4%</td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\">Рентабельность собственного капитала в 2019 году выше, чем у большинства сопоставимых предприятий.</td>\n                </tr>\n                <tr>\n                    <td rowspan=\"2\">Фондоотдача</td>\n                    <td class=\"text-center\"><span class=\"green-value\">1</span></td>\n                    <td class=\"text-center\">&le;0,38</td>\n                    <td class=\"text-center\">0,95</td>\n                    <td class=\"text-center\">&ge;3,77</td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\">Фондоотдача показывает, сколько рублей выручки приходится на каждый рубль стоимости основных фондов организации. Для фондоемких отраслей этот показатель ниже, чем для материалоемких. Фондоотдача организации выше среднеотраслевой.</td>\n                </tr>\n            </tbody>\n        </table>\n        </div>\n        \n\n        <h3>1.4. Показатели деловой активности (оборачиваемости)</h3>\n        <p></p>\n        \n        <div class=\"table-adapt\">\n        <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                    <th rowspan=\"2\" class=\"text-center\">\n                        Показатели\n                    </th>\n                    <th rowspan=\"2\" class=\"text-center\">\n                        ПАО &quot;МАГНИТ&quot;, 2019 г.\n                    </th>\n                    <th colspan=\"3\" class=\"text-center\">Отраслевые показатели, 2019 г.</th>\n                </tr>\n                <tr>\n                    <th class=\"text-center\">Существенно хуже* среднего</th>\n                    <th class=\"text-center\">Среднеотраслевое значение</th>\n                    <th class=\"text-center\">Существенно лучше** среднего</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td rowspan=\"2\">Оборачиваемость оборотных активов, в днях</td>\n                    <td class=\"text-center\"><span class=\"red-value\">33144</span></td>\n                    <td class=\"text-center\">&ge;491</td>\n                    <td class=\"text-center\">184</td>\n                    <td class=\"text-center\">&le;79,1</td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\">Организации требуется значительно больше дней для получения выручки равной величине оборотных активов, чем аналогичным предприятиям.</td>\n                </tr>\n                <tr>\n                    <td rowspan=\"2\">Оборачиваемость дебиторской задолженности, в днях</td>\n                    <td class=\"text-center\"><span class=\"red-value\">2693</span></td>\n                    <td class=\"text-center\">&ge;211</td>\n                    <td class=\"text-center\">77,3</td>\n                    <td class=\"text-center\">&le;29,6</td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\">Управление дебиторской задолженностью поставлено значительно хуже, чем в аналогичных организациях.</td>\n                </tr>\n                 <tr>\n                    <td rowspan=\"2\">Оборачиваемость активов, в днях</td>\n                    <td class=\"text-center\"><span class=\"red-value\">96686</span></td>\n                    <td class=\"text-center\">&ge;2079</td>\n                    <td class=\"text-center\">1152</td>\n                    <td class=\"text-center\">&le;517</td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\">Как минимум три четверти сравниваемых организаций распоряжаются своими активами эффективней, чем ПАО &quot;МАГНИТ&quot;.</td>\n                </tr>\n            </tbody>\n        </table>\n        </div>\n        \n\t\n        <h3>2. Сравнение с общероссийскими показателями</h3>\n        <p>В дополнение к сравнительному анализу в рамках отрасли ниже приведено сравнение финансовых показателей ПАО &quot;МАГНИТ&quot; со всеми российскими предприятиями аналогичного масштаба деятельности. В сравнении использованы 113 тыс. российских организаций с выручкой 120 - 800 млн. руб.</p>\n        \n        <div class=\"table-adapt\">\n        <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                    <th rowspan=\"2\" class=\"text-center\">\n                        Показатели\n                    </th>\n                    <th rowspan=\"2\" class=\"text-center\">\n                        ПАО &quot;МАГНИТ&quot;, 2019 г.\n                    </th>\n                    <th colspan=\"3\" class=\"text-center\">Общероссийские показатели, 2019 г.</th>\n                </tr>\n                <tr>\n                    <th class=\"text-center\">Существенно хуже* среднего</th>\n                    <th class=\"text-center\">Среднее значение (медиана)</th>\n                    <th class=\"text-center\">Существенно лучше** среднего</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>Коэффициент автономии</td>\n                    <td class=\"text-center\"><span class=\"green-value\">0,68</span></td>\n                    <td class=\"text-center\">&le;0,05</td>\n                    <td class=\"text-center\">0,22</td>\n                    <td class=\"text-center\">&ge;0,55</td>\n                </tr>\n                <tr>\n                    <td>Коэффициент обеспеченности собственными оборотными средствами</td>\n                    <td class=\"text-center\"><span class=\"red-value\">-0,19</span></td>\n                    <td class=\"text-center\">&le;-0,01</td>\n                    <td class=\"text-center\">0,11</td>\n                    <td class=\"text-center\">&ge;0,44</td>\n                </tr>\n                <tr>\n                    <td>Коэффициент обеспеченности запасов</td>\n                    <td class=\"text-center\"><span class=\"red-value\">-1073,85</span></td>\n                    <td class=\"text-center\">&le;-0,06</td>\n                    <td class=\"text-center\">0,42</td>\n                    <td class=\"text-center\">&ge;1,91</td>\n                </tr>\n                <tr>\n                    <td>Коэффициент покрытия инвестиций</td>\n                    <td class=\"text-center\"><span class=\"green-value\">0,87</span></td>\n                    <td class=\"text-center\">&le;0,09</td>\n                    <td class=\"text-center\">0,34</td>\n                    <td class=\"text-center\">&ge;0,68</td>\n                </tr>\n                <tr>\n                    <td>Коэффициент текущей ликвидности</td>\n                    <td class=\"text-center\"><span class=\"green-value\">2,14</span></td>\n                    <td class=\"text-center\">&le;1,02</td>\n                    <td class=\"text-center\">1,28</td>\n                    <td class=\"text-center\">&ge;2,34</td>\n                </tr>\n                <tr>\n                    <td>Коэффициент быстрой ликвидности</td>\n                    <td class=\"text-center\"><span class=\"green-value\">2,14</span></td>\n                    <td class=\"text-center\">&le;0,58</td>\n                    <td class=\"text-center\">0,95</td>\n                    <td class=\"text-center\">&ge;1,54</td>\n                </tr>\n                <tr>\n                    <td>Коэффициент абсолютной ликвидности</td>\n                    <td class=\"text-center\"><span class=\"green-value\">2,02</span></td>\n                    <td class=\"text-center\">&le;0,01</td>\n                    <td class=\"text-center\">0,09</td>\n                    <td class=\"text-center\">&ge;0,36</td>\n                </tr>\n                <tr>\n                    <td>Рентабельность продаж</td>\n                    <td class=\"text-center\"><span class=\"red-value\">-143,98%</span></td>\n                    <td class=\"text-center\">&le;0,67%</td>\n                    <td class=\"text-center\">3%</td>\n                    <td class=\"text-center\">&ge;8,53%</td>\n                </tr>\n                <tr>\n                    <td>Рентабельность продаж по EBIT</td>\n                    <td class=\"text-center\"><span class=\"green-value\">6416%</span></td>\n                    <td class=\"text-center\">&le;0,69%</td>\n                    <td class=\"text-center\">2,73%</td>\n                    <td class=\"text-center\">&ge;8,26%</td>\n                </tr>\n                <tr>\n                    <td>Норма чистой прибыли</td>\n                    <td class=\"text-center\"><span class=\"green-value\">6082%</span></td>\n                    <td class=\"text-center\">&le;0,31%</td>\n                    <td class=\"text-center\">1,62%</td>\n                    <td class=\"text-center\">&ge;5,77%</td>\n                </tr>\n                <tr>\n                    <td>Коэффициент покрытия процентов к уплате</td>\n                    <td class=\"text-center\"><span class=\"green-value\">21,2</span></td>\n                    <td class=\"text-center\">&le;1,56</td>\n                    <td class=\"text-center\">5,4</td>\n                    <td class=\"text-center\">&ge;27</td>\n                </tr>\n                <tr>\n                    <td>Рентабельность активов</td>\n                    <td class=\"text-center\"><span class=\"green-value\">23%</span></td>\n                    <td class=\"text-center\">&le;0,79%</td>\n                    <td class=\"text-center\">4,83%</td>\n                    <td class=\"text-center\">&ge;15,7%</td>\n                </tr>\n                <tr>\n                    <td>Рентабельность собственного капитала</td>\n                    <td class=\"text-center\"><span class=\"red-value\">29,7%</span></td>\n                    <td class=\"text-center\">&le;9,93%</td>\n                    <td class=\"text-center\">34,5%</td>\n                    <td class=\"text-center\">&ge;86,3%</td>\n                </tr>\n                <tr>\n                    <td>Фондоотдача</td>\n                    <td class=\"text-center\"><span class=\"red-value\">1</span></td>\n                    <td class=\"text-center\">&le;8,95</td>\n                    <td class=\"text-center\">44,3</td>\n                    <td class=\"text-center\">&ge;229</td>\n                </tr>\n                <tr>\n                    <td>Оборачиваемость оборотных активов, в днях</td>\n                    <td class=\"text-center\"><span class=\"red-value\">33144</span></td>\n                    <td class=\"text-center\">&ge;215</td>\n                    <td class=\"text-center\">117</td>\n                    <td class=\"text-center\">&le;63,9</td>\n                </tr>\n                <tr>\n                    <td>Оборачиваемость дебиторской задолженности, в днях</td>\n                    <td class=\"text-center\"><span class=\"red-value\">2693</span></td>\n                    <td class=\"text-center\">&ge;106</td>\n                    <td class=\"text-center\">53,2</td>\n                    <td class=\"text-center\">&le;24,6</td>\n                </tr>\n                <tr>\n                    <td>Оборачиваемость активов, в днях</td>\n                    <td class=\"text-center\"><span class=\"red-value\">96686</span></td>\n                    <td class=\"text-center\">&ge;275</td>\n                    <td class=\"text-center\">143</td>\n                    <td class=\"text-center\">&le;75,8</td>\n                </tr>\n            </tbody>\n        </table>\n        </div>\n\n        <h3>3. Итоги сравнительного анализа</h3>\n        <p>Формируя выводы по результатам сравнительного анализа, мы рассмотрели девять наиболее важных показателей:</p>\n        <ul>\n            <li>три показателя финансовой устойчивости (коэффициенты автономии, обеспеченности собственными оборотными средствами и покрытия инвестиций);</li>\n            <li>три показатели платежеспособности (коэффициенты текущей, быстрой и абсолютной ликвидности);</li>\n            <li>три показателя эффективности деятельности (рентабельность продаж, норма чистой прибыли, рентабельность активов).</li>\n        </ul>\n        <p>В зависимости от попадания каждого значения в квартиль, показателям присвоен балл от -2 до +2 (-2 – 1-й квартиль, -1 – 2-й квартиль, +1 – 3-й квартиль; +2 – 4-й квартиль; 0 – значение отклоняется от медианы не более чем на 5% разницы между медианой и квартилем, в который попало значение показателя). Для формирования вывода баллы обобщены с равным весом каждого показателя (найдено среднее арифметическое баллов). Полученное значение интерпретировано следующим образом</p>\n        <ul>\n            <li>от +1 до  +2 включительно – финансовое состояние значительно лучше среднего;</li>\n            <li>от 0.11 до +1 включительно   – финансовое состояние лучше среднего;</li>\n            <li>от -0.11 вкл до +0.11вкл – примерно соответствует среднему;</li>\n            <li>от -1 вкл до -0.11) – хуже среднего;</li>\n            <li>от -2 включительно до -1 – значительно хуже среднего.</li>\n        </ul>\n        <p>Результат расчета итогового балла для ПАО &quot;МАГНИТ&quot; представлен в следующей таблице:</p>\n        \n        <div class=\"table-adapt\">\n        <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                    <th rowspan=\"2\">Показатель</th>\n                    <th colspan=\"2\" class=\"text-center\">Результат сравнения показателей ПАО &quot;МАГНИТ&quot;</th>\n                </tr>\n                <tr>\n                    <th class=\"text-center\" style=\"width:34%; vertical-align: top;\">с отраслевыми</th>\n                    <th class=\"text-center\" style=\"width:34%; vertical-align: top;\">с общероссийскими</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <th colspan=\"3\">1. Финансовая устойчивость</th>\n                </tr>\n                <tr>\n                    <td>1.1. Коэффициент автономии (финансовой независимости)</td>\n                    <td class=\"text-center coef-val\"><span class=\"green-value\">+1</span></td>\n                    <td class=\"text-center coef-val\"><span class=\"green-value\">+2</span></td>\n                </tr>\n                <tr>\n                    <td>1.2. Коэффициент обеспеченности собственными оборотными средствами</td>\n                    <td class=\"text-center coef-val\"><span class=\"green-value\">+1</span></td>\n                    <td class=\"text-center coef-val\"><span class=\"red-value\">-2</span></td>\n                </tr>\n                <tr>\n                    <td>1.3. Коэффициент покрытия инвестиций</td>\n                    <td class=\"text-center coef-val\"><span class=\"grey-value\">0</span></td>\n                    <td class=\"text-center coef-val\"><span class=\"green-value\">+2</span></td>\n                </tr>\n                <tr>\n                    <th colspan=\"3\">2. Платежеспособность</th>\n                </tr>\n                <tr>\n                    <td>2.1. Коэффициент текущей ликвидности</td>\n                    <td class=\"text-center coef-val\"><span class=\"green-value\">+1</span></td>\n                    <td class=\"text-center coef-val\"><span class=\"green-value\">+1</span></td>\n                </tr>\n                <tr>\n                    <td>2.2. Коэффициент быстрой ликвидности</td>\n                    <td class=\"text-center coef-val\"><span class=\"green-value\">+1</span></td>\n                    <td class=\"text-center coef-val\"><span class=\"green-value\">+2</span></td>\n                </tr>\n                <tr>\n                    <td>2.3. Коэффициент абсолютной ликвидности</td>\n                    <td class=\"text-center coef-val\"><span class=\"green-value\">+2</span></td>\n                    <td class=\"text-center coef-val\"><span class=\"green-value\">+2</span></td>\n                </tr>\n                <tr>\n                    <th colspan=\"3\">3. Эффективность деятельности</th>\n                </tr>\n                <tr>\n                    <td>3.1. Рентабельность продаж</td>\n                    <td class=\"text-center coef-val\"><span class=\"red-value\">-2</span></td>\n                    <td class=\"text-center coef-val\"><span class=\"red-value\">-2</span></td>\n                </tr>\n                <tr>\n                    <td>3.2. Норма чистой прибыли</td>\n                    <td class=\"text-center coef-val\"><span class=\"green-value\">+2</span></td>\n                    <td class=\"text-center coef-val\"><span class=\"green-value\">+2</span></td>\n                </tr>\n                <tr>\n                    <td>3.3. Рентабельность активов</td>\n                    <td class=\"text-center coef-val\"><span class=\"green-value\">+2</span></td>\n                    <td class=\"text-center coef-val\"><span class=\"green-value\">+2</span></td>\n                </tr>\n                <tr>\n                    <td style=\"font-weight: bold\">Итоговый балл</td>\n                    <td class=\"text-center coef-val\"><strong><span class=\"green-value\">+0.9</span></strong><p>Финансовое состояние организации лучше среднего по отрасли.</p></td>\n                    <td class=\"text-center coef-val\"><strong><span class=\"green-value\">+1</span></strong><p>Финансовое состояние организации лучше среднего по РФ.</p></td>\n                </tr>\n            </tbody>\n        </table>\n        </div>\n        <p>* Существенно хуже среднего – 1-я квартиль значений, то есть наихудшие значения 25% предприятий отрасли.</p>\n        <p>** Существенно лучше среднего – 4-я квартиль значений, то есть наилучшие значения 25% предприятий отрасли.</p>",
                "chart": [
                    {
                        "x": "2012",
                        "y": "0.6"
                    },
                    {
                        "x": "2013",
                        "y": "1.1"
                    },
                    {
                        "x": "2014",
                        "y": "0.8"
                    },
                    {
                        "x": "2015",
                        "y": "0.6"
                    },
                    {
                        "x": "2016",
                        "y": "-0.4"
                    },
                    {
                        "x": "2017",
                        "y": "-0.4"
                    },
                    {
                        "x": "2018",
                        "y": "1.3"
                    },
                    {
                        "x": "2019",
                        "y": "0.9"
                    }
                ],
                "history": {
                    "2012": {
                        "assets": 68422621000,
                        "revenue": 309230000,
                        "net_profit": 7737404000,
                        "net_assets": 47377703000
                    },
                    "2013": {
                        "assets": 81717075000,
                        "revenue": 315098000,
                        "net_profit": 13073967000,
                        "net_assets": 50882560000
                    },
                    "2014": {
                        "assets": 92731977000,
                        "revenue": 331967000,
                        "net_profit": 37098811000,
                        "net_assets": 57756988000
                    },
                    "2015": {
                        "assets": 130949557000,
                        "revenue": 344604000,
                        "net_profit": 37536826000,
                        "net_assets": 74384835000
                    },
                    "2016": {
                        "assets": 126226733000,
                        "revenue": 370517000,
                        "net_profit": 29785206000,
                        "net_assets": 63231440000
                    },
                    "2017": {
                        "assets": 149829064000,
                        "revenue": 413495000,
                        "net_profit": 37559017000,
                        "net_assets": 83481241000
                    },
                    "2018": {
                        "assets": 146251850000,
                        "revenue": 414553000,
                        "net_profit": 30998450000,
                        "net_assets": 132110271000
                    },
                    "2019": {
                        "assets": 206529031000,
                        "revenue": 665891000,
                        "net_profit": 40501229000,
                        "net_assets": 140614322000
                    }
                },
                "counter": 1
            }
        },
        "last_updated": "2020-02-09 15:08:48"
    }
]

interface ISales {
    _id: string;
    manager: string;
    client: string;
    document?: string;
    amount: number;
    tags?: any[];
    comment?: string;
    created?: string;
}
const sales: ISales[] = [
    {
        "_id": "6fd45gf4vf54g8fs9sf",
        "manager": "608af5e931f85fb848ae1079",
        "client": "ООО Магнит",
        "document": "15689",
        "amount": 295680.00,
        "tags": ["#АкцияЛето2020"],
        "comment": "По акции Лето2020",
        "created": "05.08.2020",
    },
    {
        "_id": "d65r84gg6f21ds2d56d",
        "manager": "608af5e931f85fb848ae1079",
        "client": "ООО Магнит",
        "document": "18965",
        "amount": 180600.59,
        "tags": ["#допродажа"],
        "comment": "Дорофеев П.С. +79150568976",
        "created": "25.11.2020",
    },
    {
        "_id": "t65df321d5g4d5gdr89",
        "manager": "608af5e931f85fb848ae1079",
        "client": "Красцветмет",
        "document": "19301",
        "amount": 160508.40,
        "tags": ["#екатеринбург", "#филиал"],
        "comment": "Поставка в филиал в Екатеринбурге",
        "created": "16.03.2021",
    },
    {
        "_id": "g65gsf5d46a8we78r6ew",
        "manager": "608af5e931f85fb848ae1079",
        "client": "Красцветмет",
        "document": "13236",
        "amount": 456890.00,
        "tags": ["#красноярск"],
        "comment": "45463",
        "created": "10.07.2020",
    },
    {
        "_id": "6fd45gf4vf54g8fs9sf",
        "manager": "608af5e931f85fb848ae1079",
        "client": "ООО Роса",
        "document": "15689",
        "amount": 286609.50,
        "tags": ["#АкцияЛето2020"],
        "comment": "По акции Лето2020",
        "created": "12.06.2020",
    }
]

const legendStyles = (): StyleRules => ({
    root: {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'row',
    },
});

const legendLabelStyles = (): StyleRules => ({
    label: {
        whiteSpace: 'nowrap',
    },
});

const arrayToStringFormatter = ({ value }: any ) => (
    value.join(', ')
);
const ArrayToStringProvider = (props: any) => (
    <DataTypeProvider
        {...props}
        formatterComponent={arrayToStringFormatter}
    />
)

const statusFormatter = ({ value }: any ) => (
    <p style={{
        "backgroundColor": value === 'hot' ? "orange" : value === 'new' ? "green" : "yellow",
        "color": "white",
        "padding": "5px 8px",
        "width": "50px",
        "textAlign": "center",
        "borderRadius": "4px",
        "fontWeight": "bold",
    }}>
    { value }
    </p>
);
const StatusColumnProvider = (props: any) => (
    <DataTypeProvider
        {...props}
        formatterComponent={statusFormatter}
    />
)

interface iLegendRootBase {
    classes?: any;
    children: any;
    labelComponent?: any;
    rootComponent?: any;
}
const LegendRootBase = ({ classes, ...restProps }: iLegendRootBase) => (
    <Legend.Root
        {...restProps}
        className={classes.root}
    />
);

/*interface iLegendRoot {
    root?: {
        display: string,
        margin: string,
        flexDirection: string,
        name: string,
    },
    name?: string,
}*/
const LegendRoot = withStyles(legendStyles, { name: 'LegendRoot'})(LegendRootBase);

interface iLegendLabelBase {
    classes?: any;
    children?: any;
    text: string;
    labelComponent?: any;
}
const LegendLabelBase = ({ classes, ...restProps }: iLegendLabelBase) => (
    <Legend.Label className={classes.label} {...restProps} />
);

const LegendLabel = withStyles(legendLabelStyles, { name: 'LegendLabel' })(LegendLabelBase);

/*interface iBarSeriesForCity {
    regionCities?: any,
    0?: any,
}*/
const barSeriesForCity = (regionCities: any[]) => Object
    .keys(regionCities[0])
    .reduce((acc: any, item, index) => {
    if (item !== 'year') {
        acc.push(
            <BarSeries
                key={index.toString()}
                valueField={item}
                argumentField="year"
                name={item}
            />
        );
    }
    return acc;
}, []);

interface iGridDetailContainerBase {
    data?: any;
    row?: any;
    classes?: any;
}
const gridDetailContainerBase = (data: iGridDetailContainerBase[]) => ({ row, classes }: iGridDetailContainerBase) => {
const regionCities = data.reduce((acc: any[], item: any) => {
    const currentCities = item.cities.reduce((current: any[], itemCity: any) => {
        let currentObj = {};
        if (itemCity.region === row.region) {
            currentObj = { [itemCity.cityName]: itemCity.count };
        }
        return { ...current, ...currentObj };
    }, []);
    return [...acc, { year: item.year, ...currentCities }];
}, []);

return (
    <div className={classes.detailContainer}>
    <h5 className={classes.title}>
        {`Economics of ${row.region}`}
    </h5>
    <Paper className={classes.paper}>
        <Chart
        data={regionCities}
        height={300}
        >
        <ArgumentScale
            factory={scaleBand}
        />
        <ArgumentAxis
            showTicks={false}
        />
        <ValueAxis
            //labelComponent={AxisLabel}
        />
        {barSeriesForCity(regionCities)}
        <Stack />
        <Legend
            rootComponent={LegendRoot}
            //labelComponent={LegendLabel}
            position="bottom"
        />
        </Chart>
    </Paper>
    </div>
    );
};

// Row Detail Tabs
interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
    row?: any;
}

function TabPanel(props: TabPanelProps) {
    
    const { children, value, index, ...other } = props;
    

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
        {value === index && (
            <Box p={3}>
                <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useRowDetailStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        //backgroundColor: theme.palette.background.paper,
        backgroundColor: '#ddd',
        border: '3px #3f51b5 solid',
        borderRadius: '4px',
        boxShadow: '1px 2px 3px rgba(0,0,0,0.15)',
    },
    tab: {
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
        gap: theme.spacing(3),
        flexWrap: 'wrap',
        padding: theme.spacing(3),
    },
    width100: {
        width: '100%',
        border: '1px #f5f5f5 solid',
        padding: theme.spacing(2),
    },
    flex1: {
        flex: 1,
        border: '1px #f5f5f5 solid',
        padding: theme.spacing(2),
    },
    textField: {
        width: '100%',
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '1rem',
        //flexWrap: 'wrap',
        padding: '0.4rem 1.5rem',
        //maxWidth: '30%',
        textAlign: 'center',
        boxShadow: '1px 2px 3px rgba(0,0,0,0.15)',
        //border: '1px #f5f5f5 solid',
        lineHeight: 1,
        //marginTop: '1rem',
        backgroundColor: '#faf6ba',
    },
    hidden: {
        display: 'none',
    },
    lastUpdatedGreen: {
        color: '#118711',
        margin: '0 0.5rem',
        fontWeight: 'bolder'
    },
    lastUpdatedRed: {
        color: 'red',
        margin: '0 0.5rem',
        fontWeight: 'bolder'
    }
}));

const getRowId = (row: IClients) => row._id;

const RowDetail = (row: any) => {
    const classes = useRowDetailStyles();
    
    const [value, setValue] = useState(0);
    const handleTabsChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const [status, setStatus] = useState('');

    const handleSelectStatusChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setStatus(event.target.value as string);
    };

    const [client] = useState(row.row);

    const [today] = useState(new Date());

    const [last_updated] = useState(() => ( client.last_updated && client.last_updated !== '' ) ? new Date(client.last_updated) : false );

    const getDatesDifference = (date: Date, less_than: number) => {
        return ( new Date().getTime() - new Date(date).getTime() ) < (24 * 3600000 * less_than);
    }

    const dateToString = useCallback((date: boolean | Date) => {
        
        if( typeof date !== 'boolean' ) {
            const dd: number    = date.getDate(); 
            const mm: number    = date.getMonth() + 1; 
            const yyyy: number  = date.getFullYear();
            const hour: number  = date.getHours();
            const min: number   = date.getMinutes();
            const sec: number   = date.getSeconds();

            return(
                <span className={
                    getDatesDifference(date, 90) ? 
                    classes.lastUpdatedGreen : 
                    classes.lastUpdatedRed}
                >
                    {
                        (dd < 10 ? '0' + dd : dd) + '.' + 
                        (mm < 10 ? '0' + mm : mm) + '.' + 
                        yyyy + ' ' + 
                        (hour < 10 ? '0' + hour : hour) + ':' + 
                        (min < 10 ? '0' + min : min) + ':' + 
                        sec
                    }
                </span>
            )
        }
       
       return (<span className={classes.lastUpdatedRed}>неизвестно</span>);
        
    }, []);

    const updateCompanyData = useCallback((value: number) => {
        
        return(
            <div className={value === 0 || value === 1 || value === 3 ? classes.buttonContainer : classes.hidden}>
                <Button 
                    size="small" 
                    variant="contained" 
                    color="secondary"
                    startIcon={<RefreshIcon />}
                >
                    Обновить
                </Button>
                <p><small>Дата последнего обновления: {dateToString(last_updated)}</small></p>
                <p><small>Данные будут получены по ИНН компании из ФНС, Росстата и других официальных источников</small></p> 
            </div>
        );
        
    }, []);

    const [contactsSelection, setContactsSelection] = useState<any>([]);
    
    const contactsExporterRef = useRef<any>(null);
    
    const startContactsExport = useCallback(() => {
        contactsExporterRef.current.exportGrid();
    }, [contactsExporterRef]);

    const getClientContactsPanel = useCallback((value: number) => {
        
        return(
            <div className={value === 2 ? classes.buttonContainer : classes.hidden}>
                <Button 
                    size="small" 
                    variant="contained" 
                    color="secondary"
                    startIcon={<AddIcon />}
                >
                    Создать контакт
                </Button>
                <p><small>Список контактов компании { client.name }</small></p> 
            </div>
        );
        
    }, []);

    const [pageSizes] = useState([5, 10, 15, 0]);
    const [selection, setSelection] = useState<any>([]);

    const exporterRef = useRef<any>(null);
    const startExport = useCallback(() => {
        exporterRef.current.exportGrid();
    }, [exporterRef]);

    const [arrayToStringColumns] = useState<string[]>(['tags']);
    const [statusColumns] = useState<string[]>(['status']);

    const getClientSalesPanel = useCallback((value: number) => {
        
        return(
            <div className={value === 4 ? classes.buttonContainer : classes.hidden}>
                <Button 
                    size="small" 
                    variant="contained" 
                    color="secondary"
                    startIcon={<AddIcon />}
                >
                    Добавить продажу
                </Button>
                <p><small>Список продаж компании { client.name }</small></p> 
            </div>
        );
        
    }, []);

    const getClientTasksPanel = useCallback((value: number) => {
        
        return(
            <div className={value === 5 ? classes.buttonContainer : classes.hidden}>
                <Button 
                    size="small" 
                    variant="contained" 
                    color="secondary"
                    startIcon={<AddIcon />}
                >
                    Создать задачу
                </Button>
                <p><small>Список задач по клиенту { client.name }</small></p> 
            </div>
        );
        
    }, []);

    return (
        <div className={classes.root}>
            
            <AppBar position="static">
                <Tabs 
                    value={value} 
                    onChange={handleTabsChange} 
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="simple tabs example"
                >
                    <Tab label="О компании" {...a11yProps(0)} />
                    <Tab label="Реквизиты" {...a11yProps(1)} />
                    <Tab label="Показатели" {...a11yProps(2)} />
                    <Tab label="Контакты" {...a11yProps(3)} />
                    <Tab label="Продажи" {...a11yProps(4)} />
                    <Tab label="Задачи" {...a11yProps(5)} />
                    <Tab label="Календарь" {...a11yProps(6)} />
                </Tabs>
            </AppBar>

            { updateCompanyData(value) }
            { getClientContactsPanel(value) }
            { getClientSalesPanel(value) }
            { getClientTasksPanel(value) }
            
            <TabPanel value={value} index={0}>
                
                <div className={classes.tab}>

                    <div className={classes.flex1}>

                        <TextField
                            id="outlined-short-name"
                            label="Краткое название"
                            placeholder="Краткое название"
                            helperText="Для внутреннего использования"
                            margin="normal"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            defaultValue={client.name}
                        />
                            
                        <TextField
                            id="outlined-inn-hand-input"
                            label="ИНН"
                            placeholder="ИНН"
                            fullWidth
                            margin="normal"
                            helperText="ИНН используется для получения данных о компании"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            defaultValue={client.inn}
                        />

                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="status-select-outlined-label">Статус</InputLabel>
                            <Select
                                labelId="status-select-outlined-label"
                                id="status-select-outlined"
                                value={client.status ? client.status : ''}
                                onChange={handleSelectStatusChange}
                                label="Статус"
                                style={{"width":"300px"}}
                            >
                                <MenuItem value="">
                                    <em>Не выбран</em>
                                </MenuItem>
                                <MenuItem value={'new'}>new</MenuItem>
                                <MenuItem value={'hot'}>hot</MenuItem>
                                <MenuItem value={'lost'}>lost</MenuItem>
                            </Select>
                        </FormControl>

                    </div>
                    
                    
                    <div className={classes.flex1}>

                        <TextField
                            id="outlined-region"
                            label="Регион"
                            placeholder="Регион"
                            helperText="Регионы можно перечислить через запятую, например: область, город"
                            margin="normal"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            defaultValue={client.region.length > 0 ? client.region.join(', ') : ''}
                        />

                        <TextField
                            id="outlined-tags"
                            //className={classes.textField}
                            label="Теги"
                            placeholder="Теги"
                            helperText="Теги можно перечислить через запятую"
                            margin="normal"
                            fullWidth
                            multiline
                            rows={4}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            defaultValue={client.tags.length > 0 ? client.tags.join(', ') : ''}
                        /> 

                        <TextField
                            id="outlined-comment"
                            //className={classes.textField}
                            label="Комментарий"
                            placeholder="Комментарий"
                            margin="normal"
                            fullWidth
                            multiline
                            rows={4}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            defaultValue={'Комментарий к клиенту...'}
                        /> 
                    </div>
                    
                    
                </div>
            
            </TabPanel>
            <TabPanel value={value} index={1}>
                {
                    ( client.company !== {} && client.company.suggestions !== undefined)
                    ? 
                    <div className={classes.tab}>

                        <div className={classes.width100}>
                            <TextField
                                id="outlined-full-name-with-opf"
                                label="Полное название"
                                placeholder="Полное название"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={ client.company.suggestions[0].data.name.full_with_opf }
                            />
                        </div>

                        <div className={classes.flex1}>
                            <TextField
                                id="outlined-requisites-full-address"
                                label="Юридический адрес"
                                placeholder="Юридический адрес"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.address.data.source}
                            />

                            <TextField
                                id="outlined-requisites-short-address"
                                label="Краткий адрес"
                                placeholder="Краткий адрес"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.address.data.city_with_type + ', ' + client.company.suggestions[0].data.address.data.street_with_type + ', ' + client.company.suggestions[0].data.address.data.house_type_full + ' ' + client.company.suggestions[0].data.address.data.house}
                            />

                            <TextField
                                id="outlined-requisites-manager"
                                label={client.company.suggestions[0].data.management.post.charAt(0).toUpperCase() + client.company.suggestions[0].data.management.post.slice(1)}
                                placeholder="Руководитель"
                                helperText={client.company.suggestions[0].data.management.disqualified === null ? '' : 'Дисквалификация!'}
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.management.name}
                            />

                            <TextField
                                id="outlined-requisites-postal-code"
                                label="Почтовый индекс"
                                placeholder="Почтовый индекс"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.address.data.postal_code}
                            />
                            
                            <TextField
                                id="outlined-requisites-country"
                                label="Страна"
                                placeholder="Страна"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.address.data.country}
                            />

                            <TextField
                                id="outlined-requisites-region"
                                label="Регион"
                                placeholder="Регион"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.address.data.region + ' ' + client.company.suggestions[0].data.address.data.region_type}
                            />

                            <TextField
                                id="outlined-requisites-region-iso-code"
                                label="ISO-код региона"
                                placeholder="ISO-код региона"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.address.data.region_iso_code}
                            />

                            <TextField
                                id="outlined-requisites-federal-district"
                                label="Федеральный округ"
                                placeholder="Федеральный округ"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.address.data.federal_district}
                            />

                            

                            <TextField
                                id="outlined-requisites-geo-latitude"
                                label="Координаты широты"
                                placeholder="Координаты широты"
                                fullWidth
                                helperText="latitude"
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.address.data.geo_lat}
                            />

                            <TextField
                                id="outlined-requisites-geo-longitude"
                                label="Координаты долготы"
                                placeholder="Координаты долготы"
                                fullWidth
                                helperText="longitude"
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.address.data.geo_lon}
                            />

                            {
                                client.company.suggestions[0].data.address.data.metro 
                                &&
                                <TextField
                                    id="outlined-requisites-metro"
                                    label="Ближайшие станции метро"
                                    placeholder="Ближайшие станции метро"
                                    fullWidth
                                    multiline
                                    rows={5}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    defaultValue={client.company.suggestions[0].data.address.data.metro.map((station: any, index: number) => (index+1) + ") Станция " + station.name + ", " + station.line + " линия, расстояние до станции " + station.distance + " км ")}
                                />
                            }

                            <TextField
                                id="outlined-requisites-kladr-id"
                                label="КЛАДР-код (kladr_id)"
                                placeholder="КЛАДР-код (kladr_id)"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.address.data.kladr_id}
                            />

                            <TextField
                                id="outlined-requisites-fias-id"
                                label="ФИАС-код (fias_id)"
                                placeholder="ФИАС-код (fias_id)"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.address.data.fias_id}
                            />

                            <TextField
                                id="outlined-requisites-geoname-id"
                                label="Идентификатор GeoNames"
                                placeholder="Идентификатор GeoNames"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.address.data.geoname_id}
                            />
                        </div>
                        
                        <div className={classes.flex1}>
                            
                            <TextField
                                id="outlined-inn"
                                label="ИНН"
                                placeholder="ИНН"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.inn}
                            />

                            <TextField
                                id="outlined-requisites-kpp"
                                label="КПП"
                                placeholder="КПП"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.kpp}
                            />
                            
                            <TextField
                                id="outlined-requisites-ogrn"
                                label="ОГРН"
                                placeholder="ОГРН"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.ogrn}
                            />

                            <TextField
                                id="outlined-requisites-okved"
                                label={"ОКВЭД" + " " + client.company.suggestions[0].data.okved_type}
                                placeholder="ОКВЭД"
                                fullWidth
                                helperText={client.condition.status === 'success' ? client.condition.data.org.okved_text : client.company.suggestions[0].data.okved}
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.okved}
                            />

                            {
                                client.company.suggestions[0].data.okveds &&
                                <TextField
                                    id="outlined-requisites-okveds"
                                    label="ОКВЭД"
                                    placeholder="ОКВЭД"
                                    fullWidth
                                    helperText="Дополнительные виды деятельности"
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    defaultValue={typeof client.company.suggestions[0].data.okveds === 'string' ? client.company.suggestions[0].data.okveds : client.company.suggestions[0].data.okveds.join(', ')}
                                />
                            }

                            <TextField
                                id="outlined-requisites-okato"
                                label="ОКАТО"
                                placeholder="ОКАТО"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.okato}
                            />
                            
                            <TextField
                                id="outlined-requisites-okfs"
                                label="ОКФС"
                                placeholder="ОКФС"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.okfs}
                            />

                            <TextField
                                id="outlined-requisites-okogu"
                                label="ОКОГУ"
                                placeholder="ОКОГУ"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.okogu}
                            />

                            <TextField
                                id="outlined-requisites-okpo"
                                label="ОКПО"
                                placeholder="ОКПО"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.okpo}
                            />

                            <TextField
                                id="outlined-requisites-oktmo"
                                label="ОКТМО"
                                placeholder="ОКТМО"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.oktmo}
                            />

                            <TextField
                                id="outlined-requisites-opf"
                                label="ОКОПФ"
                                placeholder="ОКОПФ"
                                fullWidth
                                helperText={client.company.suggestions[0].data.opf.full + ' (' + client.company.suggestions[0].data.opf.short + ') ' + client.company.suggestions[0].data.opf.type}
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.opf.code}
                            />

                            <TextField
                                id="outlined-requisites-tax-office"
                                label="Код ИФНС"
                                placeholder="Код ИФНС"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={client.company.suggestions[0].data.address.data.tax_office}
                            />                         
                        </div>
                    
                    </div>
                    :
                    <h4>Нет данных</h4>
                }
                
            </TabPanel>
            <TabPanel value={value} index={2}>
                {
                    client.contacts.length > 0
                    ?
                    <div className={classes.tab}>
                        
                        <Grid
                            rows={client.contacts}
                            columns={[
                                { name: 'name', title: 'ФИО' },
                                { name: 'position', title: 'Должность' },
                                { name: 'phones', title: 'Телефоны' },
                                { name: 'email', title: 'Email' },
                                { name: 'comment', title: 'Комментарии' },
                            ]}
                        >
                            <SelectionState
                                selection={contactsSelection}
                                onSelectionChange={setContactsSelection}
                            />
                            
                            <IntegratedSelection />

                            <SortingState
                                defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
                            />
                            <IntegratedSorting />            

                            <Table />

                            <TableHeaderRow 
                                showSortingControls 
                                messages={ {sortingHint: 'Сортировка'}  }
                            />

                            <TableSelection showSelectAll highlightRow={true} />

                            <Toolbar />

                            <ExportPanel 
                                startExport={startContactsExport} 
                                messages={{
                                    showExportMenu: 'Экспорт в Excel',
                                    exportAll: 'Все строки',
                                    exportSelected: 'Отмеченные строки'
                                }} 
                            />

                        </Grid>
                        <GridExporter
                            ref={contactsExporterRef}
                            rows={client.contacts}
                            columns={[
                                { name: 'name', title: 'ФИО' },
                                { name: 'position', title: 'Должность' },
                                { name: 'phones', title: 'Телефоны' },
                                { name: 'email', title: 'Email' },
                                { name: 'comment', title: 'Комментарии' },
                            ]}
                            onSave={(workbook: any) => {
                                workbook.xlsx.writeBuffer().then((buffer: any) => {
                                    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Contacts.xlsx');
                                });
                            }}
                        />
                    </div>
                    :
                    <h4>Нет данных</h4>
                }
            </TabPanel>
            <TabPanel value={value} index={3}>
                {
                    client.condition.status === 'success'
                    ?
                    <div className={classes.tab}>
                        <div className={classes.width100}>
                            <Chart
                                data={client.condition.data.chart}
                            >

                                <ValueScale name="x" />
                                <ValueScale name="y" />

                                
                                <ArgumentAxis
                                    showTicks={true}
                                />

                                <ValueAxis scaleName="y" showGrid={false} showLine showTicks />
                                <ValueAxis scaleName="x" position="right" showGrid={true} showLine showTicks />


                                <LineSeries
                                    name="Балл"
                                    valueField="y"
                                    argumentField="x"
                                    //color="orange"
                                    scaleName="x"
                                />
                                
                                <Stack
                                    stacks={[
                                        { series: client.condition.data.chart.map((item: any) => item.x) },
                                    ]}
                                />
                                
                                <Legend />
                                
                                <Title text="История финансового состояния" />

                            </Chart>
                        </div>

                        <div className={classes.width100}>
                            <a href={client.condition.data.url} target="_blank">Сравнительный анализ по данным ФНС</a>
                        </div>

                        <div>
                            <div 
                                className="html-cell"
                                dangerouslySetInnerHTML={{ 
                                    __html: client.condition.data.full_report
                                        }
                                    }
                            >
                                
                            </div>
                        </div>

                    </div>
                    :
                    <h4>Нет данных</h4>
                }
            </TabPanel>
            <TabPanel value={value} index={4}>
                {
                    client.condition !== {}
                    ?
                    <div className={classes.tab}>
                        {
                            selection.length > 0 ? <span>
                                Выбрано:
                                {' '}
                                {selection.length}
                            </span> : <span>
                                Всего:
                                {' '}
                                {sales.length}
                            </span>
                        }
                        <Grid
                            rows={sales}
                            columns={[
                                { name: 'document', title: '№ документа' },
                                { name: 'amount', title: 'Сумма, руб.' },
                                { name: 'created', title: 'Дата' },
                                { name: 'tags', title: 'Теги' },
                                { name: 'comment', title: 'Комментарий' },
                            ]}
                            getRowId={getRowId}
                        >

                            <ArrayToStringProvider
                                for={arrayToStringColumns}
                            />
                            
                            <StatusColumnProvider
                                for={statusColumns}
                            />
                            
                            <PagingState
                                defaultCurrentPage={0}
                                defaultPageSize={pageSizes[0] || 5}
                            />
                            <SelectionState
                                selection={selection}
                                onSelectionChange={setSelection}
                            />
                            <IntegratedSelection />
                            <IntegratedPaging />

                            <SearchState defaultValue="" />

                            <SortingState
                                defaultSorting={[{ columnName: 'created', direction: 'asc' }]}
                            />
                            <IntegratedSorting />

                            <FilteringState defaultFilters={[]} />
                            <IntegratedFiltering />              

                            <Table
                                messages={ {noData: 'Не найдено'}  } 
                                //columnExtensions={tableColumnExtensions}
                            />

                            
                            <TableFilterRow messages={ {filterPlaceholder: 'Фильтр'}  } />

                            <TableHeaderRow 
                                showSortingControls 
                                messages={ {sortingHint: 'Сортировка'}  }
                            />

                            <TableSelection showSelectAll highlightRow={true} />

                            <Toolbar />
                            

                            <SearchPanel 
                                messages={{
                                    searchPlaceholder: 'Найти...'
                                }} 
                            />

                            <ExportPanel 
                                startExport={startExport} 
                                messages={{
                                    showExportMenu: 'Экспорт в Excel',
                                    exportAll: 'Все строки',
                                    exportSelected: 'Отмеченные строки'
                                }} 
                            />

                            <PagingPanel 
                                pageSizes={pageSizes} 
                                messages={{
                                    rowsPerPage: 'Кол-во строк:', 
                                    showAll: 'Все' 
                                }} 
                            />
                        </Grid>
                        <GridExporter
                            ref={exporterRef}
                            rows={sales}
                            columns={[
                                { name: 'document', title: '№ документа' },
                                { name: 'sum', title: 'Сумма, руб.' },
                                { name: 'created', title: 'Дата' },
                                { name: 'tags', title: 'Теги' },
                                { name: 'comment', title: 'Комментарий' },
                            ]}
                            onSave={(workbook: any) => {
                                workbook.xlsx.writeBuffer().then((buffer: any) => {
                                    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Sales.xlsx');
                                });
                            }}
                        />
                    </div>
                    :
                    <h4>Нет данных</h4>
                }
            </TabPanel>
            <TabPanel value={value} index={5}>
                {
                    client.condition !== {}
                    ?
                    <div className={classes.tab}>
                        <KanbanDashboard />
                    </div>
                    :
                    <h4>Нет данных</h4>
                }
            </TabPanel>

            <TabPanel value={value} index={6}>
                {
                    client.condition !== {}
                    ?
                    <div className={classes.tab}>
                        <DxTasksList />
                    </div>
                    :
                    <h4>Нет данных</h4>
                }
            </TabPanel>
        </div>
    )
};
// end Row Detail Tabs

const onSave = (workbook: any) => {
    workbook.xlsx.writeBuffer().then((buffer: any) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Clients.xlsx');
    });
};

const DxClientsList: FC = () => {

    const [columns] = useState([
        { name: 'name', title: 'Название компании' },
        { name: 'inn', title: 'ИНН' },
        { name: 'status', title: 'Статус' },
        { name: 'region', title: 'Регион' },
        { name: 'tags', title: 'Теги' },
    ]);
    const [rows] = useState(clients);

    const [pageSizes] = useState([5, 10, 15, 0]);

    const [selection, setSelection] = useState<any>([]);

    const exporterRef = useRef<any>(null);
    const startExport = useCallback(() => {
        exporterRef.current.exportGrid();
    }, [exporterRef]);

    const [arrayToStringColumns] = useState<string[]>(['region', 'tags']);
    const [statusColumns] = useState<string[]>(['status']);

    const [tableColumnExtensions] = useState([
        { columnName: 'name', wordWrapEnabled: true, width: 'auto' },
        { columnName: 'inn', width: '15%' },
        { columnName: 'status', width: '15%' },
        { columnName: 'region', wordWrapEnabled: true, width: 'auto' },
        { columnName: 'tags', wordWrapEnabled: true, width: 'auto' },
    ]);

    return (
        <Paper style={{
            "boxShadow": "3px 3px 4px rgba(0,0,0,0.15)", 
            "padding":"20px", 
            "marginBottom":"40px"
        }}>
            {
                selection.length > 0 ? <span>
                    Выбрано:
                    {' '}
                    {selection.length}
                </span> : <span>
                    Всего:
                    {' '}
                    {rows.length}
                </span>
            }
            <Grid
                rows={rows}
                columns={columns}
                getRowId={getRowId}
            >
                {/*<CurrencyTypeProvider
                    for={currencyColumns}
                />*/}

                <ArrayToStringProvider
                    for={arrayToStringColumns}
                />
                
                <StatusColumnProvider
                    for={statusColumns}
                />


                <RowDetailState
                    //defaultExpandedRowIds={[1]}
                />
                
                <PagingState
                    defaultCurrentPage={0}
                    defaultPageSize={pageSizes[0] || 5}
                />
                <SelectionState
                    selection={selection}
                    onSelectionChange={setSelection}
                />
                <IntegratedSelection />
                <IntegratedPaging />

                <SearchState defaultValue="" />

                <SortingState
                    defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
                />
                <IntegratedSorting />

                <FilteringState defaultFilters={[]} />
                <IntegratedFiltering />              

                <Table
                    messages={ {noData: 'Не найдено'}  } 
                    columnExtensions={tableColumnExtensions}
                />

                
                <TableFilterRow messages={ {filterPlaceholder: 'Фильтр'}  } />
                
                <TableColumnResizing />

                <TableHeaderRow 
                    showSortingControls 
                    messages={ {sortingHint: 'Сортировка'}  }
                />

                <TableSelection showSelectAll highlightRow={true} />

                <TableRowDetail
                    contentComponent={RowDetail}
                />

                <Toolbar />
                

                <SearchPanel 
                    messages={{
                        searchPlaceholder: 'Найти...'
                    }} 
                />

                <ExportPanel 
                    startExport={startExport} 
                    messages={{
                        showExportMenu: 'Экспорт в Excel',
                        exportAll: 'Все строки',
                        exportSelected: 'Отмеченные строки'
                    }} 
                />

                <PagingPanel 
                    pageSizes={pageSizes} 

                    messages={{
                        rowsPerPage: 'Кол-во строк:', 
                        showAll: 'Все',
                        info: () => `${1}-${pageSizes[0] > rows.length ? rows.length : pageSizes[0]} из ${rows.length}`,
                    }} 
                />
            </Grid>
            <GridExporter
                ref={exporterRef}
                rows={clients}
                columns={columns}
                onSave={onSave}
            />
      </Paper>
    );
}

export default React.memo(DxClientsList);
