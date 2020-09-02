
# BAT-integrated-with-blockchain-based-IoT-platform


The implementation shows the functionality of the blockchain-based IoT-platform. 

## Use case scenario

 Drug counterfeit is a severe problem in pharmaceutical supply chains. This occurs due to the lack of transparency in the transportation of drugs through the supply chain. 
 Certain medicines require to have proper conditions maintained. These details remain hidden and there is no trusted method to monitor these conditions. According to the 
 World Health Organization, more than 10% of medicines worldwide are counterfeited. Manipulating the expire date, producing drugs with no 
 active chemical ingredients are some instances where drug counterfeiting occur. After distributing these ill-treated drugs, users are unable to identify these counterfeit
 medicines. There is no proper mechanism to verify the integrity of whether the original package is distributed by the third party logistics company. Most of the 
 above-mentioned problems can be addressed by establishing trust between the parties in the supply chain. 
 A blockchain based IoT-platform can be used to process transactions that occur in the supply chain. Below figure shows the scenario of the use case chosen. In the use case, 
 the production companies produce medicine, Third Party Logistics (3PL) supply the medicine to the warehouse. Through the warehouse, the medicine is distributed to the
 pharmacies or the issuers. Most of the time drug counterfeiting occurs through the suppliers and the warehouse. 
 
 ![alt text](https://github.com/alentar/BAT-integrated-with-blockchain-based-IoT-platform/blob/master/documents/images/sup.png)
 
 ## System Architecture of the case study
 
 The implementation and analysis of the proposed system was performed in the gcloud virtual machine instance (configuration of Name- c2-standard-4, Zone- us-central1-f,
 vCPUs- 8, Memory- 30GB).
 
 The architecture of the blockchain used in the use case scenario are explained as follows. The main actors of the scenario are the supplier, warehouse and the issuer
 organizations. The network is initiated by the warehouse organization and the initial configuration of the network is configured by the warehouse entity. 
 The network is controlled according to the rules imposed by the network configuration. The channel order is maintained by the orderer connected to the channel. 
 The channel is governed by the channel configuration that has the policies related to all 3 entities. Separate certificate authorities are maintained by each entity 
 for the validation of the transactions processed in blockchain. Each organization consists of 2 peers and 1 peer is used as the anchor peer that is used to communicate with 
 the other entities. In each peer, a copy of ledger  containing details about all the transactions is installed. The architecture of the blockchain is shown in the below figure.
 
 ![alt text](https://github.com/alentar/BAT-integrated-with-blockchain-based-IoT-platform/blob/master/documents/images/network%20configuration.png)
 
The service layer consists of services such as smart contracts, data storage management, transaction processing, identity management. The peers contain copies of smart 
contracts installed in the platform. There are 2 smart contracts called create-batch and  transfer-batch, that are utilized by the applications in the platform. 
A manufacturing company uses create-batch smart contract to create a batch to be delivered to one issuer company. The details about batch of drugs such as name, 
dosage, quantity, manufactured and expiry date are added as a block to blockchain. An RFID tag is assigned for this particular batch. Transfer-batch smart contract 
is used when a batch is transferred from one entity to the other.

Application layer consists of DApps and Data visualization and Device management. Four different applications are created as DApps that are used by different 
organizations for transactions and processing of data. They are used by production companies, suppliers, warehouse and issuers for the transactions. Through another 
application, an end user can examine where a specific batch is located on that occasion. Eventually, the end user at the issuer can see how the batch has been transported, 
stored and issued by the organizations while maintaining the favorable conditions for batches with complete transparency. Below figure shows the user interface of the
application at the end of transferring a batch through the supply chain. 
 
 <img src="https://github.com/alentar/BAT-integrated-with-blockchain-based-IoT-platform/blob/master/documents/images/snap.png" alt="alt text" width="500" height="750">
 

## How to run

In a terminal run 
```bash
./ncksetup.sh
```
This will create the initial configuration of the blockchain-based IoT-platform for the use case scenario. 

you can now run any DApp created in the platform. To show an instance of use case scenario, dummy values are entered into an application. To run the sample application 
where a batch is created by a production company run the following commands. 

```bash
cd application/supplier

#echo "This is an example of an instance of a batch creation."
#echo "install necessary packages for supplier"
npm install

sleep 5

#echo "create the wallet for a user in the supplier organization"
node addToWallet.js
sleep 5

##echo "To create a batch invoke createBatch.js "
node createBatch.js
```


**note - All the other applications function in the same manner. If some errors occur during the initial configuration, delete all the resources and rerun the script.**







 
