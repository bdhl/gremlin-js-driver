/*
 *  Licensed to the Apache Software Foundation (ASF) under one
 *  or more contributor license agreements.  See the NOTICE file
 *  distributed with this work for additional information
 *  regarding copyright ownership.  The ASF licenses this file
 *  to you under the Apache License, Version 2.0 (the
 *  "License"); you may not use this file except in compliance
 *  with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 */

/**
 * @author Dzmitry Sushko
 */
'use strict';

const Connection = require('./connection');
const Client = require('gremlin/lib/driver/client');

/**
 * A {@link Client} contains methods to send messages to a Gremlin Server.
 */
class WsJsClient extends Client {

  constructor(url, options) {
    options = options || {};
    let isConnectOnStartUp = options.connectOnStartup || true;
    options.connectOnStartup = false;
    super(url, options);

    options.connectOnStartup = isConnectOnStartUp;
    this._connection = new Connection(url, options);
  }
}

module.exports = WsJsClient;
